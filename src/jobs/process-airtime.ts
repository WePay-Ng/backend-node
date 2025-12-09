import { prisma } from '@/prisma/client';
import { Akuuk } from '@/extensions/akuuk';
import { Queue } from './queues';
import { amountInKobo, formatTransferSMS } from '@/utils';

export async function processAirtimeEvent(eventId: any) {
  const event = await prisma.outboxEvent.findFirst({
    where: { aggregateId: eventId },
  });

  if (!event) return;

  const payload = event?.payload as {
    airtimeId: string;
    phoneNumber?: string;
    amount?: string;
    currency?: string;
    userId?: string;
    fromWalletId?: string;
    country?: string;
    balance: number;
    accountNumber: number;
  };

  let response: any = null;

  try {
    response = await Akuuk.airtime({
      number: payload.phoneNumber,
      amount: payload.amount,
      country: payload?.country ?? 'NG',
      billing: 'prepaid',
    });

    await prisma.$transaction(async (tx) => {
      // mark tansaction completed

      // TODO:: Check this again, it can pull any ledgerRow
      const ledgerRow = await tx.ledger.findFirst({
        where: { walletId: payload.fromWalletId },
      });

      const rate = Number(process.env.AIRTIME_PERCENT) ?? 0.025;
      await tx.fee.create({
        data: {
          transactionId: payload?.airtimeId,
          provider: ledgerRow?.providerId,
          type: 'AIRTIME' as any,
          rate,
          amount: Number(payload.amount) * rate,
          currency: 'NGN',
          status: 'SUCCESS' as any,
        },
      });

      await tx.airtime.update({
        where: { id: payload.airtimeId },
        data: {
          status: 'SUCCESS' as any,
          reference: response?.details?.txnReference + '',
          ledgerEntryId: ledgerRow?.id,
          network: response?.details?.network,
        },
      });

      await tx.transaction.update({
        where: { itemId: eventId },
        data: {
          status: 'COMPLETED',
          metadata: {
            network: response?.details?.network,
            competedAt: response?.details?.txnDate ?? new Date().toISOString(),
            airtimeId: payload.airtimeId,
          },
        },
      });

      await prisma.outboxEvent.create({
        data: {
          aggregateId: eventId,
          topic: 'airtime.purchase.completed',
          published: true,
          publishedAt: new Date().toISOString(),
          payload: {
            airtimeId: payload.airtimeId,
            userId: payload.userId,
            phoneNumber: payload.phoneNumber,
            network: response?.details?.network,
            fromWalletId: payload.fromWalletId,
            amount: payload.amount,
            currency: response?.details?.currency ?? 'NGN',
            competedAt: response?.details?.txnDate ?? new Date().toISOString(),
          },
        },
      });
    });

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!user) return response;

    const message = formatTransferSMS({
      account: payload.accountNumber + '',
      amount: amountInKobo(Number(payload.amount)),
      desc: 'Airtime Purchase to ' + payload.phoneNumber,
      balance: amountInKobo(Number(payload.balance)),
      date: new Date(),
      currency: response?.details?.currency ?? 'NGN',
      type: 'DR',
    });

    await Queue.trigger(eventId, 'NOTIFICATION', {
      country: user?.country ?? 'NG',
      message,
      phone: user?.phone!,
      type: 'SMS',
    });

    return response;
  } catch (err) {
    if (response?.code === 200) {
      await prisma.airtime.update({
        where: { id: payload.airtimeId },
        data: {
          status: 'SUCCESS' as any,
          reference: response?.details?.txnReference + '',
          network: response?.details?.network,
        },
      });

      await prisma.transaction.update({
        where: { itemId: eventId },
        data: {
          status: 'PROCESSING',
          metadata: {
            network: response?.details?.network,
            competedAt: response?.details?.txnDate ?? new Date().toISOString(),
            airtimeId: payload.airtimeId,
          },
        },
      });

      await prisma.outboxEvent.create({
        data: {
          aggregateId: eventId,
          topic: 'airtime.purchase.akuuk.partial',
          payload: {
            airtimeId: payload.airtimeId,
            userId: payload.userId,
            error: err.message,
          },
        },
      });

      throw new Error(err);
    }

    await prisma.$transaction(async (tx) => {
      await tx.airtime.update({
        where: { id: payload.airtimeId },
        data: { status: 'FAILED', error: (err as Error).message },
      });

      const wallet = await tx.wallet.findFirst({
        where: { id: payload.fromWalletId },
      });

      const newUserLedgerBalance =
        BigInt(wallet?.ledgerBalance!) + amountInKobo(Number(payload.amount));
      const newAvailableBalance =
        BigInt(wallet?.availableBalance!) +
        amountInKobo(Number(payload.amount));

      await tx.wallet.update({
        where: { id: payload.fromWalletId },
        data: {
          availableBalance: newAvailableBalance,
          ledgerBalance: newUserLedgerBalance,
        },
      });

      await prisma.transaction.update({
        where: { itemId: eventId },
        data: {
          status: 'FAILED',
          metadata: {
            network: response?.details?.network,
            competedAt: response?.details?.txnDate ?? new Date().toISOString(),
            airtimeId: payload.airtimeId,
          },
        },
      });

      const message = formatTransferSMS({
        account: payload.accountNumber + '',
        amount: amountInKobo(Number(payload.amount)),
        desc: 'Reversed: Airtime Purchase to ' + payload.phoneNumber,
        balance: newAvailableBalance,
        date: new Date(),
        currency: response?.details?.currency ?? 'NGN',
        type: 'CR',
      });

      const user = await prisma.user.findFirst({
        where: { id: payload.userId },
      });
      if (user) {
        await Queue.trigger(eventId, 'NOTIFICATION', {
          country: user?.country ?? 'NG',
          message,
          phone: user?.phone!,
          type: 'SMS',
        });
      }
    });

    await prisma.outboxEvent.create({
      data: {
        aggregateId: eventId,
        topic: 'airtime.purchase.akuuk.failed',
        payload: {
          airtimeId: payload.airtimeId,
          userId: payload.userId,
          error: err.message,
        },
      },
    });
    console.error('[AirtimeHandler] Airtime purchase failed:', err);
    throw new Error(err);
  }
}
