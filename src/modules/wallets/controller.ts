import CustomError from '@/utils/customError';
import { Request, Response } from 'express';
import {
  ValidateCreateWallet,
  ValidateExternalTransfer,
  ValidateTransfer,
} from './validator';
import * as WalletService from './service';
import { useErrorParser } from '@/utils';

export class Controller {
  static async transfer(req: Request, res: Response) {
    try {
      const user = req.user;
      if (!user) throw new CustomError('Unauthorized', 401);

      const { error, value } = ValidateTransfer().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const idempotencyKey = req.header('Idempotency-Key');
      if (!idempotencyKey)
        throw new CustomError('Idempotency key not found', 500);

      const transferred = await WalletService.walletToWalletTransfer({
        ...value,
        initiatorUserId: user.id,
        idempotencyKey,
      });

      return res.status(200).json({
        message: 'Transferred successfully',
        success: true,
        data: transferred,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async externalTransfer(req: Request, res: Response) {
    try {
      const user = req.user;
      if (!user) throw new CustomError('Unauthorized', 401);

      const { error, value } = ValidateExternalTransfer().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const idempotencyKey = req.header('Idempotency-Key');
      if (!idempotencyKey)
        throw new CustomError('Idempotency key not found', 500);

      const transferred = await WalletService.transferToExternalBank({
        ...value,
        initiatorUserId: user.id,
        senderName: user.name,
        idempotencyKey,
      });

      return res.status(200).json({
        message: 'Transferred successfully',
        success: true,
        data: transferred,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async createWallet(req: Request, res: Response) {
    try {
      const user = req.user;
      if (!user) throw new CustomError('Unauthorized', 401);

      const { error, value } = ValidateCreateWallet().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const wallet = await WalletService.createWallet({
        ...value,
        initiatorUserId: user.id,
      });

      return res.status(200).json({
        message: 'Wallet created successfully',
        success: true,
        data: wallet,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }
}
