import { environment } from '@/config/env';
import CustomError from '@/utils/customError';
import axios from 'axios';

const Client = axios.create({
  baseURL: environment.qoreId?.url ?? 'https://api.sandbox.youverify.co',
  headers: {
    authorization: environment.qoreId?.client ?? '',
  },
});

export type QoreIDBVN = {
  bvn: string;
  lastName?: string;
  firstName?: string;
};

export class QoreID {
  static async verifyBVN(data: QoreIDBVN) {
    try {
      const res = await Client.post(`/identities/bvn-basic/${data.bvn}`, {
        firstname: data.firstName,
        lastname: data.lastName,
      });
      const { data: result } = res;

      if (result.data && result.data?.statusCode?.includes('401'))
        throw new CustomError('Unauthorized', 401);

      if (result?.status?.['status'] !== 'verified')
        throw new CustomError('BVN Verification failed', 500);

      if (result.bvn) return result.bvn;
    } catch (error) {
      throw error;
    }
  }
}
