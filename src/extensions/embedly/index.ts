import { environment } from '@/config/env';
import CustomError from '@/utils/customError';
import axios from 'axios';
import { banks, countries, currencies, types } from './utils';
import { findItem, useErrorParser } from '@/utils';
import { prisma } from '@/prisma/client';

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

type iWallet = {
  customerId: string;
  currency: string;
  name?: string;
};

type Transfer = {
  fromAccount: string;
  toAccount: string;
  amount: number;
  transactionReference: string;
  remarks?: string;
};

type Payment = {
  destinationBank: string;
  destinationAccountNumber: string;
  destinationAccountName: string;
  sourceAccountNumber: string;
  sourceAccountName: string;
  remarks: string;
  amount: number;
  currency: string;
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
  static async create(wallet: iWallet) {
    const user = await prisma.user.findFirst({
      where: { embedlyCustomerId: wallet.customerId },
    });
    if (!user) throw new CustomError('Customer not found on embedly', 500);

    const currencyId = currencies.find((c) => c.shortName == wallet.currency);

    const { currency, ...rest } = wallet;
    const res = await Client.post('/wallets/add', {
      ...rest,
      currencyId,
    });
    const { data: result } = res;

    if (!result?.walletId) throw new CustomError('Wallet creation failed', 500);

    // Create user wallet
    const userWallet = await prisma.wallet.create({
      data: {
        accountNumber: result.virtualAccount.accountNumber,
        bankCode: result.virtualAccount.bankCode,
        bankName: result.virtualAccount.bankName,
        walletId: result?.walletId,
        availableBalance: 0,
        ledgerBalance: 0,
        userId: user.id,
      },
    });

    return {
      embedly: result,
      userWallet,
    };
  }

  static async get(id: string) {
    const res = await Client.get('/wallets/get/wallet/' + id);
    const { data: result } = res;

    if (result?.code !== '00')
      throw new CustomError('Failed to retrieve Wallet', 404);

    return result.data;
  }

  static async getWalletByAccount(account: string) {
    const res = await Client.get('/wallets/get/account/' + account);
    const { data: result } = res;

    if (result?.code !== '200')
      throw new CustomError('Failed to retrieve Wallet', 404);

    return result.data;
  }

  static async transfer(payload: Transfer) {}
}

class Bank {
  static async getBanks() {
    const res = await Client.get('/banks');
    const { data: result } = res;

    if (result?.code !== '200')
      throw new CustomError('Failed to retrieve Wallet', 404);

    return result.data;
  }

  static async transfer(payload: Payment) {
    const webhookUrl = `http://localhost:3000/webhooks/embedly/transfers`;

    const currency = currencies.find((c) => c.shortName == payload.currency);
    const bank = banks.find((b) => b.bankName === payload.destinationBank);

    const { currency: c, destinationBank, ...rest } = payload;

    // console.log(
    //   {
    //     ...rest,
    //     webhookUrl,
    //     currencyId: currency?.id,
    //     destinationBankCode: bank?.bankCode,
    //   },
    //   'PAYLOAD',
    // );

    const res = await PayoutClient.post('/inter-bank-transfer', {
      ...rest,
      webhookUrl,
      currencyId: currency?.id,
      destinationBankCode: bank?.bankCode,
    });

    const { data: result } = res;

    if (result?.statusCode !== '200')
      throw new CustomError('Failed to retrieve Wallet', 404);

    return result;
  }
}

export class Embedly {
  static customers = Customer;
  static validations = Validation;
  static wallets = Wallet;
  static banks = Bank;
}
