import { Queue } from '@/jobs/queues';
import { prisma } from '@/prisma/client';
import { formatCurrency, formatDate } from '@/utils';
import CustomError from '@/utils/customError';

export async function payout(payload: any) {
  const transfer = await prisma.transfer.findFirst({
    where: { transactionReference: payload.reference },
  });

  if (!transfer) throw new CustomError('Transfer not found', 404);

  if (payload?.status !== 'Success') {
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
      data: {
        status: 'COMPLETED',
        toWalletId: metadata?.provideId,
        shouldRefund: false,
      },
    });

    const wallet = await tx.wallet.findFirst({
      where: { accountNumber: payload?.accountNumber },
    });

    const newAmountInKobo = BigInt(Math.round(payload.amount * 100)); //Converted to Kobo
    const newToLedgerBal =
      BigInt(wallet?.availableBalance as any) - newAmountInKobo;

    // TODO: Create a Journal Entry and Ledger debit for the momey leaving

    const journal = await tx.journalEntry.create({
      data: {
        reference: payload.reference,
        transferId: updatedTransfer.id,
        description: payload.deliveryStatusMessage,
        postedAt: new Date().toISOString(),
        metadata: {
          fromWalletId: wallet?.id,
          toProvider: 'EMBEDLY',
        },
      },
    });

    // Create Debit Ledger
    await tx.ledger.create({
      data: {
        walletId: wallet?.id,
        journalId: journal.id,
        transferId: transfer.id,
        change: -newAmountInKobo,
        balanceAfter: newToLedgerBal,
        type: 'TRANSFER_DEBIT',
        metadata: {
          reason: payload.deliveryStatusMessage,
          fromWalletId: wallet?.id,
          toProvider: 'EMBEDLY',
        },
      },
    });

    const updatedWallet = await tx.wallet.update({
      where: { id: wallet?.id },
      data: {
        ledgerBalance: newToLedgerBal,
        availableBalance: newToLedgerBal,
      },
      include: { user: true },
    });

    // TODO:: NOTIFY USER
    await Queue.trigger(updatedTransfer?.id, 'NOTIFICATION', {
      country: updatedWallet.user?.country ?? 'NG',
      message: `
        Acct: ******${updatedWallet.accountNumber.slice(-4)}
        Amt: ${transfer.currency}${formatCurrency(payload.amount)} DR
        Desc: TRANSFER TO ${payload?.creditAccountName?.toUpperCase()} ${payload?.deliveryStatusMessage?.toUpperCase()}
        Avail Bal: ${transfer.currency}${formatCurrency(Number(newToLedgerBal) / 100)}
        Date: ${formatDate(new Date())}`,
      phone: updatedWallet.user?.phone!,
      type: 'SMS',
    });

    const feeRate = BigInt(
      Math.round(Number(process.env.EXTERNAL_PERCENT) ?? 15) * 100,
    );
    const newToLedgerBalAfterFee =
      Number(updatedWallet?.availableBalance) - Number(feeRate);

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
    await tx.ledger.create({
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

    const feeLedger = await tx.ledger.create({
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

    await tx.wallet.update({
      where: { id: wallet?.id },
      data: {
        ledgerBalance: newToLedgerBalAfterFee,
        availableBalance: newToLedgerBalAfterFee,
      },
    });

    // Add Fee
    await tx.fee.create({
      data: {
        amount: Number(feeRate), //In Kobo,
        currency: transfer.currency,
        rate: Number(feeRate), //In Kobo,
        status: 'SUCCESS',
        provider: metadata?.provideId,
        transactionId: updatedTransfer.id,
        ledgerId: feeLedger.id,
        type: 'EXTERNAL',
      },
    });

    // TODO:: NOTIFY USER
    await Queue.trigger(updatedTransfer?.id, 'NOTIFICATION', {
      country: updatedWallet.user?.country ?? 'NG',
      message: `
        Acct: ******${updatedWallet.accountNumber.slice(-4)}
        Amt: ${transfer.currency}${formatCurrency(Number(feeRate) / 100)} DR
        Desc: Commission on NIP Transfer
        Avail Bal: ${transfer.currency}${formatCurrency(Number(newToLedgerBalAfterFee) / 100)}
        Date: ${formatDate(new Date())}`,
      phone: updatedWallet.user?.phone!,
      type: 'SMS',
    });

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

    return updatedTransfer;
  });

  return transferRecord;
}

export async function inflow(payload: any) {
  // Incase of double webhook
  const _transfer = await prisma.transfer.findFirst({
    where: { transactionReference: payload.reference },
  });

  if (_transfer) return _transfer;

  const wallet = await prisma.wallet.findFirst({
    where: { accountNumber: payload?.accountNumber },
    include: { user: true },
  });

  if (!wallet) throw new CustomError('Wallet not found', 404);

  const transfer = await prisma.$transaction(async (tx) => {
    const provider = await prisma.provider.findFirst({
      where: { provider: 'EMBEDLY' },
    });

    const transfer = await tx.transfer.create({
      data: {
        provider: 'EMBEDLY',
        fromProviderId: provider?.id,
        amount: payload.amount * 100,
        currency: 'NGN',
        type: 'EXTERNAL',
        idempotencyKey: payload?.reference,
        transactionReference: payload?.reference,
        reason: payload.description,
        status: 'COMPLETED',
        shouldRefund: false,
        completedAt: new Date().toISOString(),
        metadata: {
          timestamp: new Date().toISOString(),
          type: 'INFLOW',
          completedAt: new Date().toISOString(),
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

    const newToLedgerBal =
      BigInt(wallet.ledgerBalance as any) + BigInt(payload.amount * 100);
    const newToAvailable =
      BigInt(wallet.availableBalance as any) + BigInt(payload.amount * 100);

    await tx.ledger.create({
      data: {
        walletId: wallet.id,
        journalId: journal.id,
        transferId: transfer.id,
        change: payload.amount * 100,
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
  const newToAvailable =
    BigInt(wallet.availableBalance as any) + BigInt(payload.amount * 100);
  await Queue.trigger(transfer?.id, 'NOTIFICATION', {
    country: wallet.user?.country ?? 'NG',
    message: `
        Acct: ******${wallet.accountNumber.slice(-4)}
        Amt: ${transfer.currency}${formatCurrency(payload.amount)} CR
        Desc: TRANSFER FROM ${payload?.senderName?.toUpperCase()} ${payload?.description?.toUpperCase()}
        Avail Bal: ${transfer.currency}${formatCurrency(Number(newToAvailable) / 100)}
        Date: ${formatDate(new Date())}`,
    phone: wallet.user?.phone!,
    type: 'SMS',
  });

  return transfer;
}
