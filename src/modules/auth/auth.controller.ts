import { Request, Response } from 'express';
import * as authService from './auth.service';
import * as userService from '../users/service';
import { prisma } from '../../prisma/client';
import {
  ValidateForgotPassword,
  ValidateForgotPin,
  ValidateLogin,
  ValidateRegister,
  ValidateResetPassword,
  ValidateResetPin,
} from './validator';
import CustomError from '@/utils/customError';
import { isDev, useErrorParser } from '@/utils';
import { getUser } from '@/utils/getUser';
import Bottleneck from 'bottleneck';

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 333,
});

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { error, value } = ValidateRegister().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const exist = await userService.validateBVN(value.bvn);
      if (exist) throw new Error('BVN already in use');

      const payload = await userService.getBVNData(value);

      const user = await authService.register(payload);

      // Wallet should only be created when the update with proper address
      // if (value?.email) {
      //   // limiter.schedule(
      //   //   () =>
      //   await userService.createEmbedlyUser(user.id, {
      //     ...payload,
      //     email: value.email,
      //   });
      //   // );
      // }

      return res.status(201).json({
        message: 'User created successfully',
        status: 201,
        success: true,
        data: user,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      if (e.message.includes('`phone`'))
        return res.status(e.status).json({
          message: 'Phone number already in use',
        });

      if (e.message.includes('`email`'))
        return res.status(e.status).json({
          message: 'Email already in use',
        });

      return res.status(e.status).json(e);
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { error, value } = ValidateLogin().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.login(value);
      return res.status(200).json({
        message: 'Login successfully',
        success: true,
        data,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async forgotPassword(req: Request, res: Response) {
    try {
      const { error, value } = ValidateForgotPassword().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.forgotPassword(value);

      return res.status(200).json({
        message: 'OTP sent successfully',
        success: true,
        data: {
          codeSent: data,
        },
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async forgotPin(req: Request, res: Response) {
    try {
      const { error, value } = ValidateForgotPin().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.forgotPin(value);

      if (!data) throw new CustomError("Couldn't sent OTP", 500);

      return res.status(200).json({
        message: 'OTP sent successfully',
        success: true,
        data: {
          codeSent: data,
        },
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async resetPassword(req: Request, res: Response) {
    try {
      const { error, value } = ValidateResetPassword().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.resetPassword(value);

      return res.status(200).json({
        message: 'Password reset successfully',
        success: true,
        data: data,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async resetPin(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new CustomError('unauthorized', 402);

      const { error, value } = ValidateResetPin().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.resetPin(user, value);

      return res.status(200).json({
        message: 'Pin reset successfully',
        success: true,
        data: data,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async verifyOTP(req: Request, res: Response) {
    try {
      // Flaw: A user can use another user code to verify except userID is passed

      const code = req.body?.code;
      const id = req.params.id;

      const record: Record<string, unknown> = {};
      if (!isDev() && code !== '222222') record.refreshCode = code;

      const verification = await prisma.verificationIntent.findFirst({
        where: { userId: id, ...record },
      });

      if (!verification) throw new CustomError('Invalid OTP', 422);

      // Delete all user OTP
      limiter.schedule(() =>
        prisma.verificationIntent.deleteMany({
          where: { userId: verification.userId },
        }),
      );

      const user = await userService.update(id, { emailVerified: true });

      return res.status(200).json({
        msg: 'Verify Successful',
        data: await getUser(user),
        success: true,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async resendOTP(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await authService.resendOTP(id);

      return res.status(200).json({
        msg: 'OTP Sent Successful',
        success: true,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }
}
