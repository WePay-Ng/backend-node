import { prisma } from '@/prisma/client';
import { createEmbedlyUser } from '../modules/users/service';
import { toISODate } from '@/utils';
import CustomError from '@/utils/customError';

export async function processEmbedlyWallet(eventId: any) {
  const event = await prisma.outboxEvent.findFirst({
    where: { aggregateId: eventId },
  });

  if (!event) return;

  const payload = event?.payload as {
    userId: string;
    streetLine: string;
    city?: string;
    country?: string;
    dob?: string;
    name?: string;
    phone?: string;
    email?: string;
    bvn: string;
  };
  try {
    if (!payload.email) throw new CustomError('User must provide email', 422);

    const data = {
      address: payload?.streetLine,
      city: payload?.city,
      country: payload?.country,
      dob: toISODate(payload?.dob!),
      firstName: payload?.name?.split(' ')[0],
      lastName: payload?.name?.split(' ')[1],
      phone: payload?.phone,
      middleName: payload?.name?.split(' ')?.[2] ?? '',
    };

    const wallet = await createEmbedlyUser(eventId, {
      embedly: data,
      email: payload.email,
      bvn: payload?.bvn?.trim()!,
    });

    console.log(wallet);

    await prisma.outboxEvent.create({
      data: {
        aggregateId: eventId,
        topic: 'embedly.user.wallet.creation.failed',
        payload: {
          userId: eventId,
          name: payload.name,
          email: payload.email,
        },
      },
    });

    return wallet;
  } catch (error) {
    await prisma.outboxEvent.create({
      data: {
        aggregateId: eventId,
        topic: 'embedly.user.wallet.creation.failed',
        payload: {
          userId: eventId,
          name: payload.name,
          email: payload.email,
          error,
        },
      },
    });
  }
}
