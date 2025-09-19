// src/modules/auth/auth.controller.ts
import { Request, Response } from 'express';
import * as authService from './auth.service';
import { prisma } from '../../prisma/client';
import {
  ValidateAddress,
  ValidateBank,
  ValidateForgotPassword,
  ValidateLogin,
  ValidateRegister,
  ValidateResetPassword,
  ValidateUpdateUser,
  ValidateVerification,
} from './validator';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { error, value } = ValidateRegister().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.register(value);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      let user = req?.user;
      if (!user) throw new Error('Unauthorized');

      const { error, value } = ValidateUpdateUser().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      user = await authService.update(user.id, value);

      return res.status(200).json({
        message: 'User updated successfully',
        success: true,
        data: user,
      });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async updateAgent(req: Request, res: Response) {
    try {
      let user = req?.user;
      if (!user) throw new Error('Unauthorized');

      const { error, value } = ValidateUpdateUser().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      user = await authService.update(user.id, value);

      authService.uploadFile(value?.passport, 'passport', user);
      authService.uploadFile(value?.IDFront, 'front', user);
      authService.uploadFile(value?.IDBack, 'back', user);
      authService.uploadFile(value?.utility, 'utility', user);
      authService.uploadFile(value?.cac, 'cac', user);

      return res.status(200).json({
        message: 'User updated successfully',
        success: true,
        data: user,
      });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async addAddress(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new Error('Unauthenticated');

      // Validation
      const { error, value } = ValidateAddress().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const business = await prisma.business.findUnique({
        where: { id: user.activeBusinessId! },
      });

      if (!business) throw new Error('No business found for this agent');

      const updatedBusiness = await prisma.business.update({
        where: { id: business.id },
        data: {
          ...value,
        },
      });

      return res.status(200).json({
        message: 'Business address updated successfully',
        success: true,
        data: updatedBusiness,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error?.message,
        success: false,
      });
    }
  }
  static async addVerification(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new Error('Unauthenticated');

      // Validation
      const { error, value } = ValidateVerification().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const business = await prisma.business.findUnique({
        where: { id: user.activeBusinessId! },
      });

      if (!business) throw new Error('No business found for this agent');

      const updatedBusiness = await prisma.business.update({
        where: { id: business.id },
        data: {
          ...value,
        },
      });

      return res.status(200).json({
        message: 'Business verification updated successfully',
        success: true,
        data: updatedBusiness,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error?.message,
        success: false,
      });
    }
  }
  static async addBank(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new Error('Unauthenticated');

      // Validation
      const { error, value } = ValidateBank().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const business = await prisma.business.findUnique({
        where: { id: user.activeBusinessId! },
      });

      if (!business) throw new Error('No business found for this agent');

      const updatedBusiness = await prisma.business.update({
        where: { id: business.id },
        data: {
          ...value,
        },
      });

      return res.status(200).json({
        message: 'Business bank updated successfully',
        success: true,
        data: updatedBusiness,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error?.message,
        success: false,
      });
    }
  }
  static async addBusiness(req: Request, res: Response) {
    try {
      const user = req?.user;
      if (!user) throw new Error('Unauthenticated');

      // Validation
      const { error, value } = ValidateAddress().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const business = await prisma.business.findUnique({
        where: { id: user.activeBusinessId! },
      });

      if (!business) throw new Error('No business found for this agent');

      const updatedBusiness = await prisma.business.update({
        where: { id: business.id },
        data: {
          ...value,
        },
      });

      return res.status(200).json({
        message: 'Business address updated successfully',
        success: true,
        data: updatedBusiness,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error?.message,
        success: false,
      });
    }
  }
  static async addReadiness(req: Request, res: Response) {}
  static async submitBVN(req: Request, res: Response) {}
  static async addPassword(req: Request, res: Response) {}

  static async login(req: Request, res: Response) {
    try {
      const { error, value } = ValidateLogin().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.login(value);
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }

  static async forgotPassword(req: Request, res: Response) {
    try {
      const { error, value } = ValidateForgotPassword().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.forgotPassword(value);
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async resetPassword(req: Request, res: Response) {
    try {
      const { error, value } = ValidateResetPassword().validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const data = await authService.resetPassword(value);
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
