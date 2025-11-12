import CustomError from '@/utils/customError';
import { Request, Response } from 'express';
import {
  ValidateCreateWallet,
  ValidateExternalTransfer,
  ValidateTransfer,
} from './validator';
import * as WalletService from './service';
import { useErrorParser } from '@/utils';
import { prisma } from '@/prisma/client';
import { createEmbedlyUser, hashBVN } from '../users/service';
import { Embedly } from '@/extensions/embedly';
import axios from 'axios';
import { banks } from '@/extensions/embedly/utils';
import { tryCatch } from 'bullmq';

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
      const user: any = req.user;
      if (!user) throw new CustomError('Unauthorized', 401);

      const { error, value } = ValidateCreateWallet().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      // TODO: Rewrite this code to create multiple wallets

      if (user?.wallets?.length)
        return res.status(200).json({
          message: 'Wallet retrieved successfully',
          success: true,
          data: user.wallets[0],
        });

      if (!user.embedlyCustomerId) {
        const data = {
          embedly: {
            address: user?.address?.streetLine,
            city: user?.address?.city,
            country: user?.address?.country,
            dob: user?.dob,
            firstName: user?.name?.split(' ')[0],
            lastName: user?.name?.split(' ')[1],
            mobileNumber: user?.phone,
            middleName: user?.name?.split(' ')[2],
          },
          email: user?.email!,
          bvn: user?.bvn!,
        };

        const wallet = await createEmbedlyUser(user.id, data);

        return res.status(200).json({
          message: 'Wallet created successfully',
          success: true,
          data: wallet,
        });
      }

      const verified = await Embedly.customers.verifyKYC({
        bvn: user?.bvn!,
        customerId: user?.embedlyCustomerId,
      });

      if (!verified) throw new CustomError('User KYC not verified', 422);

      const wallet = await WalletService.createWallet({
        currency: value?.currency ?? 'NGN',
        userId: user.id,
      });

      if (!wallet) throw new CustomError('Failed to create user wallet', 500);

      await hashBVN(user.id, user?.bvn!);

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

  static async getWalletFromAccount(req: Request, res: Response) {
    try {
      const accountNumber = req.params?.account;

      const wallet = await prisma.wallet.findFirst({
        where: { accountNumber: accountNumber },
        include: { user: true },
      });

      if (!wallet) throw new CustomError('Wallet not found', 404);

      return res.status(200).json({
        message: 'Wallet retrieved successfully',
        success: true,
        data: wallet,
      });
    } catch (error) {}
  }

  static async getBanks(req: Request, res: Response) {
    try {
      const resp = await axios.get('https://api.nigerianbanklogos.xyz/');
      const allBanks = resp.data;

      const merged = banks
        .map((bank: any) => {
          const match = allBanks.find((b: any) =>
            b.title.toLowerCase().includes(bank.bankName.toLowerCase()),
          );
          return match ? { ...bank, ...match } : null;
        })
        .filter(Boolean);
      console.log(merged.length);
      return res.status(200).json({
        message: 'Retrieve all banks',
        success: true,
        data: merged,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }
  static async getBankByAccountNumber() {}
}
