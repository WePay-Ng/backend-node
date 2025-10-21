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
    },
  });

  const { ...authUser } = _user;

  return {
    ...authUser,
  };
};
