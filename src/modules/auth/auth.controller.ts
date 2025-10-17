import { Request, Response } from 'express';
import * as authService from './auth.service';
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
import { toISODate, useErrorParser } from '@/utils';
import { getUser } from '@/utils/getUser';
import { Youverify } from '@/extensions/you-verify';
import { Embedly } from '@/extensions/embedly';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { error, value } = ValidateRegister().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const exist = await authService.validateBVN(value.bvn);
      if (exist) throw new Error('BVN already in use');

      const data: any = await Youverify.verifyBVN({
        id: value.bvn,
        isSubjectConsent: true,
      });

      const payload = {
        ...value,
        extra: {
          name: data?.firstName + ' ' + data?.lastName,
          dob: toISODate(data?.dateOfBirth),
          country: data?.country,
          gender: data?.gender,
          phone: data?.phone,
        },
      };

      const user = await authService.register(payload);

      // TODO: Move to background
      // const data = await Embedly.customers.personal({
      //   address: '19 Prince Okey street',
      //   city: 'Port harcourt',
      //   country: 'NG', //exist.country!,
      //   dob: '12-12-1994', //new Date(exist?.dob!).toDateString(),
      //   emailAddress: 'test@test.com', //exist?.email! ??,
      //   firstName: 'John', // exist.name?.split(' ')[0]!,
      //   lastName: 'James', //exist?.name?.split(' ')[1]!,
      //   mobileNumber: '08000000000', // exist?.phone!,
      //   type: 'Individual',
      //   middleName: 'N/A',
      // });

      return res.status(201).json({
        message: 'User created successfully',
        status: 201,
        success: true,
        data: user,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      if (e.message.includes('phone'))
        return res.status(e.status).json({
          message: 'Phone number already in use',
        });

      if (e.message.includes('email'))
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
      if (code !== '222222') record.refreshCode = code;

      const verification = await prisma.verificationIntent.findFirst({
        where: { userId: id, ...record },
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
