import { Cloudflare } from '@/extensions/cloudflare';
import { environment } from '@/config/env';
import { Request, Response } from 'express';
import CustomError from '@/utils/customError';
import { useErrorParser } from '@/utils';

export class BaseController {
  static async generateUploadURL(req: Request, res: Response) {
    try {
      const { fileName, contentType } = req.body;

      if (!fileName || !contentType)
        throw new CustomError('fileName and contentType required', 422);

      const cloudflare = new Cloudflare();
      const { signedUrl, key } = await cloudflare.generateUploadURL(
        fileName,
        contentType,
      );

      res.status(200).json({
        uploadUrl: signedUrl,
        publicUrl: `${environment.cloudflare.url}/${key}`,
      });
    } catch (err: any) {
      const e = useErrorParser(err);
      res.status(e.status).json(e);
    }
  }
}
