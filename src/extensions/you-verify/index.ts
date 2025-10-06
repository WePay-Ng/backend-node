import { environment } from '@/config/env';
import { UVerifyBVN } from '@/types/types';
import { useErrorParser } from '@/utils';
import CustomError from '@/utils/customError';
import axios from 'axios';

const Client = axios.create({
  baseURL: environment.youverify?.url ?? 'https://api.sandbox.youverify.co',
  headers: {
    token: environment.youverify?.key ?? '',
  },
});

export class Youverify {
  static async verifyBVN(data: UVerifyBVN) {
    try {
      const res = await Client.post('/v2/api/identity/ng/bvn', data);
      const { data: result } = res;

      if (result.data && result.data?.status?.includes('not_found'))
        throw new CustomError(result.data.reason, 404);

      if (result.data) return result.data;
    } catch (error) {
      const res = error?.response?.data;
      if (res && !res.success)
        throw new CustomError(res.message, res.statusCode);

      const e = useErrorParser(error);
      throw new CustomError(e?.message, e.status);
    }
  }
}
