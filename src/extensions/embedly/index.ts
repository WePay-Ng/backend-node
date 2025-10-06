import { environment } from '@/config/env';
import CustomError from '@/utils/customError';
import axios from 'axios';
import { countries, types } from './utils';
import { findItem, useErrorParser } from '@/utils';

type Personal = {
  firstName: string;
  lastName: string;
  middleName: string;
  emailAddress: string;
  mobileNumber: string;
  dob: string;
  address: string;
  city: string;
  country: string;
  type: string;
};

type Corporate = {
  rcNumber: string;
  tin: string;
  fullBusinessName: string;
  businessAddress: string;
  city: string;
  email: string;

  country: string;
  type: string;
};

const Client = axios.create({
  baseURL: environment.embedly?.url ?? 'https://api.sandbox.youverify.co',
  headers: {
    'x-api-key': environment.embedly?.key ?? '',
  },
});

Client.interceptors.request.use((config) => {
  const organizationId = environment.embedly.id;
  if (['post', 'put', 'patch'].includes(config.method || '')) {
    config.data = {
      ...config.data,
      organizationId,
    };
  }
  return config;
});

// async function getCustomerTypes() {
//   const res = await Client.get('/customers/types/all');
//   const result = res.data;
//   if (result.code !== '00' || !result.success)
//     throw new CustomError(result.message, result.code);
//   return result.data;
// }

// async function getContries() {
//   const res = await Client.get('/utilities/countries/get');
//   const result = res.data;
//   if (result.code !== '00' || !result.success)
//     throw new CustomError(result.message, result.code);
//   return result.data;
// }

class Customer {
  static async personal(payload: Personal) {
    try {
      const customerTypeId = findItem(types, payload.type, 'name')?.id;
      const eCountry = findItem(countries, payload.country, 'countryCodeTwo');

      const { country, type, ...rest } = payload;

      const data = {
        ...rest,
        customerTypeId,
        countryId: eCountry.id,
      };
      const res = await Client.post('/customers/add', data);
      const { data: result } = res;

      if (result.statuscode !== '00')
        throw new CustomError(result.message, 500);
      return result.data;
    } catch (error) {
      const res = error?.response?.data;
      if (res && !res.success)
        throw new CustomError(res.message, res.statusCode);

      const e = useErrorParser(error);
      throw new CustomError(e?.message, e.status);
    }
  }

  static async corporate(payload: Corporate) {
    try {
      const customerTypeId = findItem(types, payload.type, 'name')?.id;
      const eCountry = findItem(countries, payload.country, 'countryCodeTwo');

      const { country, type, ...rest } = payload;
      const data = {
        ...rest,
        customerTypeId,
        countryId: eCountry.id,
      };

      const res = await Client.post('/customers/add', data);
      const { data: result } = res;

      if (result.statuscode !== '00')
        throw new CustomError(result.message, 500);
      return result.data;
    } catch (error) {
      const res = error?.response?.data;
      if (res && !res.success)
        throw new CustomError(res.message, res.statusCode);

      const e = useErrorParser(error);
      throw new CustomError(e?.message, e.status);
    }
  }
}

class Validation {
  static async BVN() {}
  static async NIN() {}
}

class Wallet {
  static async create() {}
}

export class Embedly {
  static customers = Customer;
  static validations = Validation;
  static wallets = Wallet;
}
