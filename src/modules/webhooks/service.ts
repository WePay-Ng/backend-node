import { prisma } from '@/prisma/client';
import CustomError from '@/utils/customError';

export async function payout(payload: any) {
  const transfer = await prisma.transfer.findFirst({
    where: { transactionReference: payload.reference },
  });

  if (!transfer) throw new CustomError("Transfer not found", 404)

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
          ...payload
        },
      },
    });

    throw new CustomError(payload?.message, 500);
  }

  const metadata = transfer.metadata as { provideId?: string }

  const transferRecord = await prisma.$transaction(async (tx) => {
    const updatedTransfer = await tx.transfer.update({
      where: { id: transfer?.id },
      data: { status: 'COMPLETED' },
    });

    // Add Fee
    await tx.fee.create({
      data: {
        amount: payload.fee,
        currency: transfer.currency,
        rate: Number(process.env.EXTERNAL_PERCENT) ?? 0.025,
        status: "SUCCESS",
        provider: metadata?.provideId,
        transactionId: updatedTransfer.id,
        type: "EXTERNAL"
      }
    })

    await tx.outboxEvent.create({
      data: {
        aggregateId: transfer?.id,
        topic: 'transfer.external.embedly.completed',
        payload: {
          transferId: transfer?.id,
          ...payload
        },
      },
    });

    return updatedTransfer
  })

  //TODO: Trigger Notifications

  return transferRecord;
}


export async function inflow(payload: any) {
  const wallet = await prisma.wallet.findFirst({
    where: { accountNumber: payload?.accountNumber },
  });

  if (!wallet) throw new CustomError("Wallet not found", 404)

  const transfer = prisma.$transaction(async (tx) => {

    const privider = await prisma.provider.findFirst({
      where: { provider: "EMBEDLY" },
    });

    const transfer = await tx.transfer.create({
      data: {
        provider: "EMBEDLY",
        fromProviderId: privider?.id,
        amount: payload.amount,
        currency: "NGN",
        type: "EXTERNAL",
        reason: payload.description,
        status: 'COMPLETED',
        metadata: {
          timestamp: new Date().toISOString(),
          type: "INFLOW"
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
          fromProviderId: privider?.id,
          toWalletId: wallet.id,
        }
      },
    });

    const newToLedgerBal = BigInt(wallet.ledgerBalance as any) + payload.amount;
    const newToAvailable = BigInt(wallet.availableBalance as any) + payload.amount;

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
          providerId: privider?.id,
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
    return transfer
  })

  //TODO: Trigger Notifications

  return transfer
}
