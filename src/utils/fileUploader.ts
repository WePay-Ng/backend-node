// import Cloudflare from './cloudflare';
// import GCP from './GCP';

import { Cloudflare } from '../extensions/cloudflare';
import { GCP } from './GCP';

export const uploadImage = async (
  file: any,
  { prefix, platform = 'cloudflare' }: { prefix?: string; platform?: string },
) => {
  if (platform.includes('cloudflare')) {
    const cloudflare = new Cloudflare();
    return cloudflare.uploadToR2(file, prefix);
  }

  if (platform.includes('GCP')) {
    return await GCP.upload(file);
  }
};
