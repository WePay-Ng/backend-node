import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';

const r2 = new S3Client({
  region: 'auto', // Cloudflare R2 uses "auto"
  endpoint: process.env.CLOUDFLARE_BUCKET_URL,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY!,
  },
});

export class Cloudflare {
  static async uploadToR2(
    filePath: string,
    keyPrefix = 'uploads',
  ): Promise<string> {
    const fileStream = fs.createReadStream(filePath);
    const fileName = path.basename(filePath);
    const objectKey = `${keyPrefix}/${Date.now()}-${fileName}`;

    try {
      await r2.send(
        new PutObjectCommand({
          Bucket: process.env.CLOUDFLARE_BUCKET_NAME!,
          Key: objectKey,
          Body: fileStream,
          ContentType: 'application/octet-stream', // adjust for images
        }),
      );

      // Public URL if bucket policy allows
      return `${process.env.CLOUDFLARE_BUCKET_URL}/${process.env.CLOUDFLARE_BUCKET_NAME}/${objectKey}`;
    } catch (err) {
      console.error('Cloudflare R2 upload failed:', err);
      throw new Error('Upload failed');
    }
  }
}
