import { Request, Response } from 'express';
import * as userService from './service';
import { prisma } from '../../prisma/client';
import {
  ValidatePassword,
  ValidateSetCredential,
  ValidateUpdateUser,
  ValidateVerification,
  ValidatePin,
  ValidateOTP,
  ValidateFingerPrint,
} from './validator';
import CustomError from '@/utils/customError';
import { toISODate, useErrorParser } from '@/utils';
import { getUser } from '@/utils/getUser';
import Bottleneck from 'bottleneck';

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 333,
});

// Apply to this job
// https://harakaxyz.notion.site/job-senior-backend-eng

export class Controller {
  static async setCredentials(req: Request, res: Response) {
    try {
      let id = req?.params.id;
      if (!id) throw new CustomError('ID is required', 422);

      const { error, value } = ValidateSetCredential().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const user = await userService.update(id, value);

      return res.status(200).json({
        message: 'User credential set successfully',
        success: true,
        data: await getUser(user),
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      let id = req.params.id;
      if (!id) throw new Error('Unauthorized');

      const { error, value } = ValidateUpdateUser().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const user = await userService.update(id, value);

      // if (value?.email && !user.embedlyCustomerId) {
      //   const data = {
      //     address: user?.address?.streetLine,
      //     city: user?.address?.city,
      //     country: user?.address?.country,
      //     dob: toISODate(user?.dob!),
      //     firstName: user?.name?.split(' ')[0],
      //     lastName: user?.name?.split(' ')[1],
      //     phone: user?.phone,
      //     middleName: user?.name?.split(' ')?.[2] ?? '',
      //   };

      //   // TODO: Move this to a Queue
      //   await userService.createEmbedlyUser(user.id, {
      //     embedly: data,
      //     email: value.email,
      //     bvn: user?.bvn?.trim()!,
      //   });
      // }

      return res.status(200).json({
        message: 'User updated successfully',
        success: true,
        data: await getUser(user),
      });
    } catch (error: any) {
      const e = useErrorParser(error);

      if (e.message.includes('(`email`)'))
        return res.status(e.status).json({ message: 'Email already exist' });

      return res.status(e.status).json(e);
    }
  }

  static async createPin(req: Request, res: Response) {
    try {
      const ID = req.params.id;
      if (!ID) throw new CustomError('Params is required', 422);

      const { error, value } = ValidatePin().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const user = await prisma.user.findUnique({
        where: { id: ID },
        include: { address: true },
      });
      if (!user) throw new CustomError('User not found', 500);

      const updatedUser = await userService.createPin(ID, value);

      return res.status(200).json({
        message: 'User pin added successfully',
        success: true,
        data: updatedUser,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async verifyPin(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new CustomError('unauthorized', 401);

      const { error, value } = ValidatePin().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const isVerified = await userService.verifyUserPin(user.pin!, value);

      return res.status(200).json({
        message: 'User pin verified successfully',
        success: true,
        data: {
          isVerified,
        },
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async addPassword(req: Request, res: Response) {
    try {
      const ID = req.params.id;
      if (!ID) throw new CustomError('Params is required', 422);

      const { error, value } = ValidatePassword().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const user = await userService.update(ID, value);

      return res.status(200).json({
        message: 'User password successfully',
        success: true,
        data: user,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async addVerification(req: Request, res: Response) {
    try {
      let id = req?.params.id;
      if (!id) throw new CustomError('ID is required', 422);

      // Validation
      const { error, value } = ValidateVerification().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);
      const verification = await userService.addVerification(id, value);

      return res.status(200).json({
        message: 'Agent verification added successfully',
        success: true,
        data: verification,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async verifyOTP(req: Request, res: Response) {
    try {
      const id = req.params.id;

      // Validation
      const { error, value } = ValidateOTP().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const verification = await prisma.verificationIntent.findFirst({
        where: { refreshCode: value.code, userId: id },
      });

      if (!verification) throw new CustomError('Invalid OTP', 422);

      // Delete all user OTP
      // TODO: send to background
      await prisma.verificationIntent.deleteMany({
        where: { userId: verification.userId },
      });

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

  static async currentUser(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new CustomError('Unauthorized', 403);

      return res.status(200).json({
        msg: 'Logged in Successful',
        data: await getUser(user),
        success: true,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }



  static async captureFingerPrint(req: Request, res: Response) {
    try {
      const ID = req.params.id;
      if (!ID) throw new CustomError('Params is required', 422);

      const { error, value } = ValidateFingerPrint().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const user = await prisma.user.findUnique({
        where: { id: ID },
        include: { address: true },
      });
      if (!user) throw new CustomError('User not found', 500);

      const updatedUser = await userService.captureFingerPrint(ID, value);

      return res.status(200).json({
        message: 'User finger Print added successfully',
        success: true,
        data: updatedUser,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }






}
