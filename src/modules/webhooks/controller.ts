import { Request, Response } from 'express';
import { Embedly } from '@/extensions/embedly';
import CustomError from '@/utils/customError';
import { useErrorParser } from '@/utils';
import * as webhookService from './service';

export class Controller {
  static async handleTransfers(req: Request, res: Response) {
    try {
      const signature = req.headers['x-embedly-signature'];
      const body = req.body;
      const rawBody = body?.toString('utf8');

      if (!signature || !rawBody)
        throw new CustomError('Missing signature or body', 400);

      const isVerified = await Embedly.validations.verifyWebhook(
        rawBody,
        signature,
      );

      if (!isVerified) throw new CustomError('Invalid signature', 401);

      const result = req.body;
      let transfer = undefined;

      if (result.event === 'nip')
        transfer = await webhookService.inflow(result?.data);

      if (result.event === 'payout')
        transfer = await webhookService.payout(result?.data);

      return res.status(200).json({
        status: 'success',
        message: 'Webhook received and verified',
        data: transfer,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      const e = useErrorParser(error);
      res.status(e.status).json(e);
    }
  }
}
