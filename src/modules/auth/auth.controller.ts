import { Request, Response } from 'express';
import * as authService from './auth.service';
import { prisma } from '../../prisma/client';
import {
  ValidateForgotPassword,
  ValidateLogin,
  ValidateRegister,
  ValidateResetPassword,
} from './validator';
import CustomError from '@/utils/customError';
import { toISODate, useErrorParser } from '@/utils';
import { getUser } from '@/utils/getUser';
import { Youverify } from '@/extensions/you-verify';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { error, value } = ValidateRegister().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const exist = await authService.validateBVN(value.bvn);
      if (exist) throw new Error('BVN already in use');

      const data = await Youverify.verifyBVN({
        id: value.bvn,
        isSubjectConsent: true,
      });

      const payload = {
        ...value,
        extra: {
          name: data?.firstName + ' ' + data?.lastName,
          phone: data?.mobile,
          dob: toISODate(data?.dateOfBirth),
          country: data?.country,
          gender: data?.gender,
        },
      };
      const user = await authService.register(payload);

      return res.status(201).json({
        message: 'User created successfully',
        status: 201,
        success: true,
        data: user,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
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
      return res.status(200).json(data);
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async resetPassword(req: Request, res: Response) {
    try {
      const { error, value } = ValidateResetPassword().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.resetPassword(value);
      return res.status(200).json(data);
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

      const verification = await prisma.verificationIntent.findFirst({
        where: { refreshCode: code, userId: id },
      });

      if (!verification) throw new CustomError('Invalid OTP', 422);

      // Delete all user OTP
      // TODO: send to background
      await prisma.verificationIntent.deleteMany({
        where: { userId: verification.userId },
      });

      const user = await authService.update(id, { emailVerified: true });

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
}
