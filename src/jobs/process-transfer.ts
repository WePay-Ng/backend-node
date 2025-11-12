import { Embedly } from '@/extensions/embedly';
import { prisma } from '@/prisma/client';
import CustomError from '@/utils/customError';
import { Queue } from './queues';

export async function processTransferEvent(eventId: any) {
  const event = await prisma.outboxEvent.findFirst({
    where: { aggregateId: eventId },
  });

  if (!event) throw new CustomError('Event not found', 404);

  const payload = event?.payload as {
    amount: string;
    currency: string;
    destinationBank: string;
    destinationAccountNumber: string;
    destinationAccountName: string;
    sourceAccountNumber: string;
    sourceAccountName: string;
    remarks: string;
    fromWalletId: string;
    initiatedBy: string;
  };
  try {
    const result = await Embedly.banks.transfer({
      amount: Number(payload.amount),
      currency: payload.currency,
      destinationBank: payload.destinationBank,
      destinationAccountNumber: payload.destinationAccountNumber,
      destinationAccountName: payload.destinationAccountName,
      sourceAccountNumber: payload.sourceAccountNumber,
      sourceAccountName: payload.sourceAccountName,
      remarks: payload.remarks,
    });
    console.log(result, 'RESULT');
    if (!result.succeeded) throw new CustomError('Transfer not succeeded', 500);

    const transferRecord = await prisma.$transaction(async (tx) => {
      // Add this transaction to the Provider account
      const provider = await tx.provider.upsert({
        where: { provider: 'EMBEDLY' },
        create: { provider: 'EMBEDLY', balance: Number(payload.amount) },
        update: {
          balance: { increment: payload.amount.toString() } as any,
          total: { increment: 1 },
        },
      });

      // 3.1 Create pending transfer
      const transfer = await tx.transfer.update({
        where: { id: eventId },
        data: {
          status: 'PROCESSING',
          transactionReference: result.data,
          metadata: {
            providerId: provider.id,
          },
        },
      });

      // 3.2 Debit user wallet
      const fromWallet = await tx.wallet.findUnique({
        where: { id: payload.fromWalletId },
      });
      if (!fromWallet) throw new CustomError('From wallet not found', 404);

      const newBalance =
        BigInt(fromWallet.availableBalance) - BigInt(payload.amount);
      await tx.wallet.update({
        where: { id: fromWallet.id },
        data: {
          availableBalance: Number(newBalance),
        },
      });

      // create JournalEntry
      const journal = await tx.journalEntry.create({
        data: {
          reference: transfer.id,
          transferId: transfer.id,
          description: 'external transfer',
          metadata: {
            fromWalletId: fromWallet.id,
            providerId: provider.id,
          },
        },
      });

      // 3.3 Create ledger entry (DEBIT)
      await tx.ledger.create({
        data: {
          walletId: fromWallet.id,
          transferId: transfer.id,
          journalId: journal.id,
          change: BigInt(-payload.amount),
          balanceAfter: newBalance,
          type: 'TRANSFER_DEBIT',
          metadata: {
            reason: payload.remarks,
            toBankCode: payload.destinationBank,
            toAccount: payload.destinationAccountNumber,
          },
        },
      });

      // provider float ledger row (credit)
      await tx.ledger.create({
        data: {
          providerId: provider.id,
          journalId: journal.id,
          change: BigInt(payload.amount),
          balanceAfter:
            BigInt(provider.balance as any) + BigInt(payload.amount),
          type: 'TRANSFER_CREDIT',
          metadata: {
            transferId: transfer.id,
            provider: 'EMBEDLY',
            reason: payload.remarks,
            toBankCode: payload.destinationBank,
            toAccount: payload.destinationAccountNumber,
          },
        },
      });

      // 3.4 Create outbox for async publish
      await tx.outboxEvent.create({
        data: {
          aggregateId: transfer.id,
          topic: 'transfer.external.embedly.processing',
          payload: {
            transferId: transfer.id,
            userId: payload.initiatedBy,
            amount: payload.amount,
            currency: payload.currency,
            toBankCode: payload.destinationBank,
            toAccountNumber: payload.destinationAccountNumber,
            toAccountName: payload.destinationAccountName,
            journalId: journal.id,
          },
        },
      });

      return transfer;
    });

    const user = await prisma.user.findFirst({
      where: { id: payload.initiatedBy },
    });
    if (!user) return transferRecord;

    await Queue.trigger(transferRecord.id, 'NOTIFICATION', {
      country: user?.country ?? 'NG',
      message: `You have successfully transfered ${payload.currency}${payload.amount} to ${payload.destinationAccountNumber}`,
      phone: user.phone,
      type: 'SMS',
    });

    return transferRecord;
  } catch (err) {
    console.log(err, 'ERROR');
    await prisma.transfer.update({
      where: { id: eventId },
      data: {
        status: 'FAILED',
        reason: err.message,
      },
    });

    await prisma.outboxEvent.create({
      data: {
        aggregateId: eventId,
        topic: 'transfer.external.embedly.failed',
        payload: {
          transferId: eventId,
          userId: payload.initiatedBy,
          amount: payload.amount,
          currency: payload.currency,
          toBankCode: payload.destinationBank,
          toAccountNumber: payload.destinationAccountNumber,
          toAccountName: payload.destinationAccountName,
          error: err.message,
        },
      },
    });

    throw new CustomError('External transfer failed', 500);
  }
}
