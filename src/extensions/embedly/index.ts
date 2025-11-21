import { environment } from '@/config/env';
import CustomError from '@/utils/customError';
import axios from 'axios';
import { banks, countries, currencies, sanitizeAddress, types } from './utils';
import {
  findItem,
  generateRandomNumber,
  isTestingBVN,
  useErrorParser,
} from '@/utils';
import crypto from 'crypto';
import { Corporate, Payment, Personal, Transfer, iWallet } from '@/types/types';

const Client = axios.create({
  baseURL: environment.embedly?.url ?? 'https://waas-staging.embedly.ng/api/v1',
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

const PayoutClient = axios.create({
  baseURL:
    environment.embedly?.payoutURL ?? 'https://payout-staging.embedly.ng/api',
  headers: {
    'x-api-key': environment.embedly?.key ?? '',
  },
});

class Customer {
  static async personal(payload: Personal) {
    try {
      const customerType = findItem(types, 'Individual', 'name');
      const country = findItem(
        countries,
        payload.country,
        payload?.country?.length > 2 ? 'name' : 'countryCodeTwo',
      );

      const { country: c, address, ...rest } = payload;
      const sanitizedAddress = sanitizeAddress(address);

      const data = {
        ...rest,
        customerTypeId: customerType?.id,
        countryId: country?.id,
        address: sanitizedAddress,
      };
      const res = await Client.post('/customers/add', data);
      const { data: result } = res;

      if (result.code !== '00') throw new CustomError(result.message, 500);

      return result.data;
    } catch (error) {
      const res = error?.response?.data;
      if (res && !res.success)
        throw new CustomError(
          res?.message ?? res.title,
          res?.statusCode ?? res.status,
        );

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

  static async verifyKYC(payload: any) {
    try {
      let bvn = payload.bvn;
      if (isTestingBVN(bvn)) bvn = generateRandomNumber(11);

      const res = await Client.post('/customers/kyc/premium-kyc?verify=1', {
        ...payload,
        bvn,
      });
      const { data: result } = res;

      if (result.code !== '00') throw new CustomError(result.message, 500);
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
  static async verifyWebhook(rawBody: any, signature?: string | string[]) {
    const hmac = crypto.createHmac('sha512', environment.embedly.key);
    hmac.update(rawBody, 'utf8');
    const computedSignature = hmac.digest('hex');

    return computedSignature !== signature;
  }
}

class Wallet {
  static async create(wallet: iWallet) {
    const currency = currencies.find((c) => c.shortName === wallet.currency);

    const { currency: c, ...rest } = wallet;
    const res = await Client.post('/wallets/add', {
      ...rest,
      currencyId: currency?.id,
    });
    const { data: result } = res;

    if (result?.code !== '00')
      throw new CustomError('Wallet creation failed', 500);

    return result.data;
  }

  static async get(id: string) {
    const res = await Client.get('/wallets/get/wallet/' + id);
    const { data: result } = res;

    if (result?.code !== '00')
      throw new CustomError('Failed to retrieve Wallet from Embedly', 404);

    return result.data;
  }

  static async getWalletByAccount(account: string) {
    const res = await Client.get('/wallets/get/account/' + account);
    const { data: result } = res;

    if (result?.code !== '200')
      throw new CustomError('Failed to retrieve Wallet from Embedly', 404);

    return result.data;
  }

  static async transfer(payload: Transfer) {
    const res = await Client.put(
      '/wallets/wallet/transaction/v2/wallet-to-wallet',
      payload,
    );
    const { data: result } = res;
    return result.data;
  }
}

class Bank {
  static async getBanks() {
    const res = await Client.get('/banks');
    const { data: result } = res;

    if (result?.code !== '200')
      throw new CustomError('Failed to retrieve Wallet from Embedly', 404);

    return result.data;
  }

  static async transfer(payload: Payment) {
    const webhookUrl = environment.embedly.webhookURL;
    const organizationAccount = environment.embedly.orgAccount;
    const organizationName = environment.embedly.orgName;

    const currency = currencies.find((c) => c.shortName == payload.currency);
    const bank = banks.find((b) =>
      b.bankName.toLowerCase().includes(payload.destinationBank.toLowerCase()),
    );

    if (!bank) throw new CustomError('Bank not found', 404);

    const { currency: c, destinationBank, ...rest } = payload;

    const res = await PayoutClient.post('/inter-bank-transfer', {
      ...rest,
      webhookUrl,
      currencyId: currency?.id,
      destinationBankCode: bank?.bankCode,
      sourceAccountNumber: organizationAccount + '',
      sourceAccountName: organizationName,
    });

    const { data: result } = res;
    return result;
  }
}

export class Embedly {
  static customers = Customer;
  static validations = Validation;
  static wallets = Wallet;
  static banks = Bank;
}
