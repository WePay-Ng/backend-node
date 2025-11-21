import { prisma } from '@/prisma/client';
import { useErrorParser } from '@/utils';
import CustomError from '@/utils/customError';
import { Request, Response } from 'express';

export class Controller {
  // Get all transactions by user
  static async all(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new CustomError('Unauthorized', 401);

      const filters = req.query?.filters ?? {};
      const page = Number(req.query?.page) ?? 0;
      const size = Number(req.query?.size) ?? 10;

      const transactions = await prisma.transaction.findMany({
        where: { userId: user.id },
        take: size,
        skip: page,
      });

      return res.status(200).json({
        message: 'Transactions retrieved successfully',
        success: true,
        data: transactions,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  // Get single transaction by ID
  static async get(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new CustomError('Unauthorized', 401);

      const id = req.params?.id;

      const transaction = await prisma.transaction.findUnique({
        where: { id },
      });

      return res.status(200).json({
        message: 'Transaction retrieved successfully',
        success: true,
        data: transaction,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }
}
