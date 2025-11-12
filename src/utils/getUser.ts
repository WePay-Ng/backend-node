import CustomError from './customError';
import { prisma } from '@/prisma/client';

export const getUser = async (user: any) => {
  if (!user) throw new CustomError('User not found', 404);

  const _user = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      merchant: true,
      agent: true,
      wallets: true,
      address: true,
    },
  });

  const { ...authUser } = _user;

  return {
    ...authUser,
    wallets: authUser.wallets.map((w) => {
      return {
        ...w,
        availableBalance: Number(w.availableBalance) / 100,
        reservedBalance: Number(w.reservedBalance) / 100,
        ledgerBalance: Number(w.ledgerBalance) / 100,
      };
    }),
  };
};
