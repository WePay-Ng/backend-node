import jwt from 'jsonwebtoken';
import CustomError from './customError';
import { prisma } from '@/prisma/client';

interface IToken {
  userEmail: string;
  userId: string;
}

export const getUser = async (user: any) => {
  if (!user) throw new CustomError('User not found', 404);

  const _user = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      merchant: true,
      agent: true,
    },
  });

  const { ...authUser } = _user;

  return {
    ...authUser,
  };
};

// export const getUserByToken = async (token: string) => {
//   try {
//     const decodedToken = jwt.verify(
//       token,
//       environment.auth.tokenSecret,
//     ) as IToken;

//     if (!decodedToken?.userId)
//       throw new CustomError('Authorization header missing or invalid', 401);

//     return await getUser({ id: (decodedToken as IToken).userId });
//   } catch (e) {
//     const error = useErrorParser(e);
//     throw new CustomError(error.message, error.status);
//   }
// };
