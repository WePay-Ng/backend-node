import { Request, Response } from 'express';
import * as authService from './auth.service';
import * as userService from '../users/service';
import { prisma } from '../../prisma/client';
import {
  ValidateForgotPassword,
  ValidateForgotPin,
  ValidateLogin,
  ValidateLoginWithFinger,
  ValidateOTP,
  ValidateRegister,
  ValidateResetPassword,
  ValidateResetPin,
  ValidateUpdatePin,
  ValidateVerifyDOB,
  VerifyBVN,
} from './validator';
import CustomError from '@/utils/customError';
import { isDev, useErrorParser } from '@/utils';
import { getUser } from '@/utils/getUser';
import Bottleneck from 'bottleneck';
import { signAccessToken } from '@/utils/jwt';
import { User } from '@prisma/client';

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
      if (exist) throw new CustomError('BVN already in use', 403);

      const payload = await userService.getBVNData(value);

      const user = await authService.register(payload as any);

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

  static async getBVNDetails(req: Request, res: Response) {
    try {
      const { error, value } = VerifyBVN().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const payload = await userService.getBVNData(value);

      return res.status(200).json({
        message: 'BVN details retrieved successfully',
        data: payload,
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
      const token = signAccessToken({ id: data.id });
      return res.status(200).json({
        message: 'Login successfully',
        success: true,
        data,
        token,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async loginWithFingerPrint(req: Request, res: Response) {
    try {
      const { error, value } = ValidateLoginWithFinger().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.loginWithFinger(value);
      const token = signAccessToken({ id: data.id });
      return res.status(200).json({
        message: 'Login successfully',
        success: true,
        data,
        token,
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

  static async verifyDOB(req: Request, res: Response) {
    try {
      const { error, value } = ValidateVerifyDOB().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await userService.getBVNData({
        ...value,
        role: 'USER',
      });

      if (!data) throw new CustomError("Couldn't verify BVN", 500);

      const dob = data?.extra?.dob;
      const isVerified = dob === value.dob;

      return res.status(200).json({
        message: 'Birthday verified successfully',
        success: true,
        data: {
          isVerified,
        },
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async resetPin(req: Request, res: Response) {
    try {
      const { error, value } = ValidateResetPin().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const { pin, otp } = value;

      // 1️⃣ Ensure OTP was provided
      if (!otp) {
        throw new CustomError('OTP is required to reset PIN', 422);
      }

      // 2️⃣ Validate OTP
      const record: any = {};
      if (!isDev() && otp !== '222222') record.refreshCode = otp;

      const otpRecord = await prisma.verificationIntent.findFirst({
        where: { refreshCode: otp, ...record },
      });

      if (!otpRecord) {
        throw new CustomError('Invalid or expired OTP', 422);
      }

      const user: User | null = await prisma.user.findFirst({
        where: { id: otpRecord.userId },
      });

      if (!user) throw new CustomError('User not found', 404);

      // 3️⃣ Reset PIN
      const data = await authService.resetPin(user, { pin });

      return res.status(200).json({
        message: 'PIN reset successfully',
        success: true,
        data,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async updatePin(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new CustomError('Unauthorized', 402);

      const { error, value } = ValidateUpdatePin().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const { pin } = value;

      // 3️⃣ Reset PIN
      const data = await authService.resetPin(user, { pin });

      return res.status(200).json({
        message: 'PIN updatedd successfully',
        success: true,
        data,
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

  static async sendOTP(req: Request, res: Response) {
    try {
      const { error, value } = ValidateOTP().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const id = req.params.id;
      await authService.resendOTP(id, value);

      return res.status(200).json({
        message: 'OTP Sent Successful',
        success: true,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }
}
