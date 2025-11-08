import { prisma } from '@/prisma/client';
import CustomError from '@/utils/customError';

export async function payout(payload: any) {
  const transfer = await prisma.transfer.findFirst({
    where: { transactionReference: payload.reference },
  });

  console.log(transfer, 'TRANSFER');

  if (!transfer) throw new CustomError('Transfer not found', 404);

  if (payload?.success !== 'Success') {
    await prisma.transfer.update({
      where: { id: transfer?.id },
      data: { status: 'FAILED' },
    });

    await prisma.outboxEvent.create({
      data: {
        aggregateId: transfer?.id,
        topic: 'transfer.external.embedly.failed',
        payload: {
          transferId: transfer?.id,
          error: payload.message,
          ...payload,
        },
      },
    });

    throw new CustomError(payload?.message, 500);
  }

  const metadata = transfer.metadata as { provideId?: string };

  const transferRecord = await prisma.$transaction(async (tx) => {
    const updatedTransfer = await tx.transfer.update({
      where: { id: transfer?.id },
      data: { status: 'COMPLETED' },
    });

    const wallet = await prisma.wallet.findFirst({
      where: { accountNumber: payload?.accountNumber },
    });

    const newToLedgerBal = Number(wallet?.availableBalance) - payload.amount;

    // TODO: Create a Journal Entry and Ledger debit for the momey leaving

    const journal = await tx.journalEntry.create({
      data: {
        reference: payload.reference,
        transferId: updatedTransfer.id,
        description: 'Commission on Nip',
        metadata: {
          fromWalletId: wallet?.id,
          toProvider: 'EMBEDLY',
        },
      },
    });

    // Create Debit Ledger
    await prisma.ledger.create({
      data: {
        walletId: wallet?.id,
        journalId: journal.id,
        transferId: transfer.id,
        change: -newToLedgerBal,
        balanceAfter: newToLedgerBal,
        type: 'FEE',
        metadata: {
          reason: 'Commission on Nip',
          fromWalletId: wallet?.id,
          toProvider: 'EMBEDLY',
        },
      },
    });

    const updatedWallet = await prisma.wallet.update({
      where: { id: wallet?.id },
      data: {
        ledgerBalance: newToLedgerBal,
        availableBalance: newToLedgerBal,
      },
    });

    // TODO:: NOTIFY USER

    const feeRate = Number(process.env.EXTERNAL_PERCENT) ?? 15;
    const newToLedgerBalAfterFee =
      Number(updatedWallet?.availableBalance) - feeRate;

    // create JournalEntry
    const feeJournal = await tx.journalEntry.create({
      data: {
        reference: payload.reference,
        transferId: updatedTransfer.id,
        description: 'Commission on Nip',
        metadata: {
          fromWalletId: wallet?.id,
          toProvider: 'EMBEDLY',
        },
      },
    });

    // Create Debit Ledger
    await prisma.ledger.create({
      data: {
        walletId: wallet?.id,
        journalId: feeJournal.id,
        transferId: transfer.id,
        change: -feeRate,
        balanceAfter: newToLedgerBalAfterFee,
        type: 'FEE',
        metadata: {
          reason: 'Commission on Nip',
          fromWalletId: wallet?.id,
          toProvider: 'EMBEDLY',
        },
      },
    });

    await prisma.ledger.create({
      data: {
        walletId: wallet?.id,
        journalId: feeJournal.id,
        transferId: transfer.id,
        change: feeRate,
        balanceAfter: newToLedgerBalAfterFee,
        type: 'FEE',
        metadata: {
          reason: 'Commission on Nip',
          fromWalletId: wallet?.id,
          toProvider: 'EMBEDLY',
        },
      },
    });

    await prisma.wallet.update({
      where: { id: wallet?.id },
      data: {
        ledgerBalance: newToLedgerBalAfterFee,
        availableBalance: newToLedgerBalAfterFee,
      },
    });

    // Add Fee
    await tx.fee.create({
      data: {
        amount: payload.fee,
        currency: transfer.currency,
        rate: Number(process.env.EXTERNAL_PERCENT) ?? 15,
        status: 'SUCCESS',
        provider: metadata?.provideId,
        transactionId: updatedTransfer.id,
        type: 'EXTERNAL',
      },
    });

    // TODO:: NOTIFY USER

    await tx.outboxEvent.create({
      data: {
        aggregateId: transfer?.id,
        topic: 'transfer.external.embedly.completed',
        payload: {
          transferId: transfer?.id,
          ...payload,
        },
      },
    });

    console.log(updatedTransfer, 'UPDATED TRANSFER');
    return updatedTransfer;
  });

  //TODO: Trigger Notifications

  return transferRecord;
}

export async function inflow(payload: any) {
  const wallet = await prisma.wallet.findFirst({
    where: { accountNumber: payload?.accountNumber },
  });

  console.log(wallet, 'WALLET');

  if (!wallet) throw new CustomError('Wallet not found', 404);

  const transfer = prisma.$transaction(async (tx) => {
    const provider = await prisma.provider.findFirst({
      where: { provider: 'EMBEDLY' },
    });

    const transfer = await tx.transfer.create({
      data: {
        provider: 'EMBEDLY',
        fromProviderId: provider?.id,
        amount: payload.amount,
        currency: 'NGN',
        type: 'EXTERNAL',
        reason: payload.description,
        status: 'COMPLETED',
        metadata: {
          timestamp: new Date().toISOString(),
          type: 'INFLOW',
        },
      },
    });

    // create JournalEntry
    const journal = await tx.journalEntry.create({
      data: {
        reference: payload.reference,
        transferId: transfer.id,
        description: payload.description,
        metadata: {
          fromProviderId: provider?.id,
          toWalletId: wallet.id,
        },
      },
    });

    const newToLedgerBal = BigInt(wallet.ledgerBalance as any) + payload.amount;
    const newToAvailable =
      BigInt(wallet.availableBalance as any) + payload.amount;

    await tx.ledger.create({
      data: {
        walletId: wallet.id,
        journalId: journal.id,
        transferId: transfer.id,
        change: payload.amount,
        balanceAfter: newToLedgerBal,
        type: 'TRANSFER_CREDIT',
        metadata: {
          reason: payload.description,
          providerId: provider?.id,
        },
      },
    });

    await tx.wallet.update({
      where: { id: wallet.id },
      data: {
        ledgerBalance: newToLedgerBal,
        availableBalance: newToAvailable,
        version: { increment: 1 },
      },
    });
    return transfer;
  });

  //TODO: Trigger Notifications

  return transfer;
}
