import { Storage } from '@google-cloud/storage';
import path from 'path';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';
import { environment } from '../config/env';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GCP_PROJECT_KEYFILE = path.join(
  __dirname,
  `../config/ipayfast-dev-b8cb1ded3f60.json`,
);

export class GCP {
  static upload(file: any) {
    const storage = new Storage({
      keyFilename: GCP_PROJECT_KEYFILE,
      projectId: environment.aws.projectId,
    });
    const bucket = storage.bucket(environment.aws.bucket);
    return new Promise((res, rej) => {
      const { originalname, buffer } = file;
      const blob = bucket.file(
        nanoid(6) + '_' + originalname.replace(/ /g, '_'),
      );
      const blobStream = blob.createWriteStream({ resumable: true });
      blobStream
        .on('finish', async () => {
          const publicURL = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          await blob.makePublic();
          res(publicURL);
        })
        .on('error', (err) => {
          rej(err);
        })
        .end(buffer);
    });
  }
}
