import CustomError from '@/utils/customError';
import { Request, Response } from 'express';
import * as Merchant from './service';
import { useErrorParser } from '@/utils';
import { ValidateBusiness, ValidateVerification } from './validator';

export class Controller {
  static async addBusiness(req: Request, res: Response) {
    try {
      const id = req?.params.id;
      if (!id) throw new CustomError('ID is required', 422);

      // Validation
      const { error, value } = ValidateBusiness().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const business = Merchant.createBusiness(id, value);

      return res.status(201).json({
        message: 'Business created successfully',
        success: true,
        data: business,
      });
    } catch (error: any) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }

  static async addVerification(req: Request, res: Response) {
    try {
      const id = req.params.id;

      // Validation
      const { error, value } = ValidateVerification().validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 422);

      const verification = Merchant.addVerification(id, value);

      return res.status(201).json({
        message: 'Verification added successfully',
        success: true,
        data: verification,
      });
    } catch (error) {
      const e = useErrorParser(error);
      return res.status(e.status).json(e);
    }
  }
}
