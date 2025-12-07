/* eslint-disable prettier/prettier */

// import jwt from "jsonwebtoken";
import { prisma } from '@/prisma/client';
import { verifyAccessToken } from '@/utils/jwt';
import { NextFunction, Request, Response } from 'express';

/** auth middleware */
export default async function Auth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // access authorize header to validate request
    const token = req?.headers?.authorization?.split(' ')[1];
    if (!token) throw new Error('Authentication failed!');

    // retrieving user data
    const decodedToken = verifyAccessToken(token);
    if (!decodedToken?.sub)
      return res.status(401).json({ error: 'Invalid token!' });

    const user = await prisma.user.findFirst({
      where: {
        id: decodedToken?.sub,
      },
      include: { address: true, wallets: true },
    });

    if (!user) throw new Error('Authentication failed!');

    req.user = user;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: error?.message ?? 'Authentication failed!' });
  }
}
