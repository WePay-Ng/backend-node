import { Embedly } from '@/extensions/embedly';
import CustomError from '@/utils/customError';
import { Transfer } from '@/types/types';
import { prisma } from '@/prisma/client';

export async function processInternalTransferEvent(
  eventId: any,
  data: Transfer,
) {
  try {
    const result = await Embedly.wallets.transfer({
      amount: Number(data.amount),
      fromAccount: data.fromAccount,
      toAccount: data.toAccount,
      transactionReference: data.transactionReference,
      remarks: data.remarks,
    });

    await prisma.outboxEvent.create({
      data: {
        aggregateId: eventId,
        topic: 'transfer.internal.organization.completed',
        payload: {
          transferId: eventId,
          fromAccount: data.fromAccount,
          toAccount: data.toAccount,
          remarks: data.remarks,
          transactionReference: data.transactionReference,
          amount: data.amount,
          currency: 'NGN',
          timestamp: new Date().toISOString(),
        },
      },
    });

    return result;
  } catch (err) {
    await prisma.outboxEvent.create({
      data: {
        aggregateId: eventId,
        topic: 'transfer.internal.organization.failed',
        payload: {
          transferId: eventId,
          fromAccount: data.fromAccount,
          toAccount: data.toAccount,
          remarks: data.remarks,
          transactionReference: data.transactionReference,
          amount: data.amount,
          currency: 'NGN',
          timestamp: new Date().toISOString(),
        },
      },
    });

    throw new CustomError(
      'Internal transfer failed to organization wallet failed',
      500,
    );
  }
}
