import CustomError from '@/utils/customError';
import { Request, Response } from 'express';
import { ValidateAirtimePayment } from './validator';
import * as PaymentService from './service';
import { useErrorParser } from '@/utils';
import { Akuuk } from '@/extensions/akuuk';

export class Controller {
  static async airtime(req: Request, res: Response) {
    try {
      const user = req.user;
      if (!user) throw new CustomError('Unauthorized', 401);

      const { error, value } = ValidateAirtimePayment().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const iKey = req.header('Idempotency-Key');
      if (!iKey) throw new CustomError('Idempotency key not found', 500);

      const payment = await PaymentService.airtime(user.id, {
        ...value,
        idempotencyKey: iKey,
      });

      return res.status(200).json({
        message: 'Airtime purchased successfully',
        success: true,
        data: payment,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }
}
