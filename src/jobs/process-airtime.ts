import { prisma } from '@/prisma/client';
import { Akuuk } from '@/extensions/akuuk';
import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 333,
});

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
    country?: string
  };

  let response: any = null

  try {
    response = await Akuuk.airtime({
      number: payload.phoneNumber,
      amount: payload.amount,
      country: payload?.country ?? 'NG',
      billing: 'prepaid',
    });

    await prisma.$transaction(async (tx) => {
      // mark tansaction completed
      const ledgerRow = await tx.ledger.findFirst({
        where: { walletId: payload.fromWalletId },
      });

      const rate = Number(process.env.AIRTIME_PERCENT) ?? 0.025
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
          reference: response?.details?.txnReference + "",
          ledgerEntryId: ledgerRow?.id,
          network: response?.details?.network
        },
      });

      await prisma.outboxEvent.create({
        data: {
          aggregateId: eventId,
          topic: 'airtime.purchase.completed',
          payload: {
            airtimeId: payload.airtimeId,
            userId: payload.userId,
            phoneNumber: payload.phoneNumber,
            network: response?.details?.network,
            fromWalletId: payload.fromWalletId,
            amount: payload.amount,
            currency: response?.details?.currency ?? 'NGN',
            competedAt: response?.details?.txnDate ?? new Date().toISOString()
          },
        },
      });
    });

    limiter.schedule(async () => {
      const user = await prisma.user.findUnique({
        where: { id: payload.userId }
      })
      await Akuuk.sendSMS({
        country: 'NG',
        message: 'Airtime purchase successful',
        number: user?.phone!,
      });

    })

    return response;
  } catch (err) {
    if (response?.code === 200) {
      await prisma.airtime.update({
        where: { id: payload.airtimeId },
        data: {
          status: 'SUCCESS' as any, reference: response?.details?.txnReference + '', network: response?.details?.network
        },
      });

      return
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
        Number(wallet?.ledgerBalance) + Number(payload?.amount);

      await tx.wallet.update({
        where: { id: payload.fromWalletId },
        data: {
          availableBalance: newUserLedgerBalance,
          ledgerBalance: newUserLedgerBalance,
        },
      });
    });

    await prisma.outboxEvent.create({
      data: {
        aggregateId: eventId,
        topic: 'airtime.purchase.failed',
        payload: {
          airtimeId: payload.airtimeId,
          userId: payload.userId,
          error: err.message,
        },
      },
    });
    console.error('[AirtimeHandler] Airtime purchase failed:', err);
  }
}
