import { environment } from '@/config/env';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
const r2 = new S3Client({
  region: 'auto', // Cloudflare R2 uses "auto"
  endpoint: environment.cloudflare.url,
  credentials: {
    accessKeyId: environment.cloudflare.key!,
    secretAccessKey: environment.cloudflare.secret!,
  },
});
export class Cloudflare {
  constructor() {}

  async uploadToR2(filePath: string, keyPrefix = 'uploads'): Promise<string> {
    const fileStream = fs.createReadStream(filePath);
    const fileName = path.basename(filePath);
    const objectKey = `${keyPrefix}/${Date.now()}-${fileName}`;

    try {
      await r2.send(
        new PutObjectCommand({
          Bucket: environment.cloudflare.bucket!,
          Key: objectKey,
          Body: fileStream,
          ContentType: 'application/octet-stream', // adjust for images
        }),
      );

      // Public URL if bucket policy allows
      return `${environment.cloudflare.url}/${environment.cloudflare.bucket}/${objectKey}`;
    } catch (err) {
      console.error('Cloudflare R2 upload failed:', err);
      throw new Error('Upload failed');
    }
  }

  async generateUploadURL(
    fileName: string,
    contentType: string,
    expiresIn: number = 60 * 5, // 5 min
  ) {
    const key = `uploads/${crypto.randomUUID()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: environment.cloudflare.bucket,
      Key: key,
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(r2, command, { expiresIn });

    return { signedUrl, key };
  }
}
