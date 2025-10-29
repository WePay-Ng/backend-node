import { prisma } from '@/prisma/client';
import CustomError from '@/utils/customError';

export async function inflow(payload: any) {
  const transfer = await prisma.transfer.findFirst({
    where: { id: payload?.data.transactionReference },
  });

  if (payload?.success !== 'Success') {
    await prisma.transfer.update({
      where: { id: transfer?.id },
      data: { status: 'FAILED' },
    });

    throw new CustomError(payload?.message, 500);
  }

  const updatedTransfer = await prisma.transfer.update({
    where: { id: transfer?.id },
    data: { status: 'COMPLETED' },
  });

  return updatedTransfer;
}
export async function payout(payload: any) {
  const transfer = await prisma.transfer.findFirst({
    where: { id: payload?.data.transactionReference },
  });

  if (payload?.data?.success !== 'Success') {
    await prisma.transfer.update({
      where: { id: transfer?.id },
      data: { status: 'FAILED' },
    });

    throw new CustomError(payload?.data?.message, 500);
  }

  const updatedTransfer = await prisma.transfer.update({
    where: { id: transfer?.id },
    data: { status: 'COMPLETED' },
  });

  return updatedTransfer;
}
