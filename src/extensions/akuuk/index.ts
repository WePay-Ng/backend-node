import { environment } from '@/config/env';
import CustomError from '@/utils/customError';
import axios from 'axios';
import { randomUUID } from 'crypto';
import { countryCodes } from './utils';
import { SMSInput } from '@/types/types';
import { findItem, formatPhoneNumber } from '@/utils';

const acc = btoa(`${environment.akuuk?.id}:${environment.akuuk?.key}`);
const Client = axios.create({
  baseURL: environment.akuuk?.url,
  headers: {
    Authorization: `Basic ${acc}`,
  },
});

export class Akuuk {
  static async sendSMS(payload: SMSInput) {
    const uuid = randomUUID();

    // Find country code
    const country = findItem(countryCodes, payload.country, 'code');

    // Format phone number
    const number = formatPhoneNumber(payload.number, country?.dial_code!);

    if (!number) return;

    const res = await Client.post('/messaging/sms', {
      message: payload.message,
      mrcReference: uuid,
      sender: environment.akuuk.sender,
      type: 'text',
      countryCode: country?.dial_code,
      number,
    });
    const { data: result } = res;

    if (result.code !== 200) throw new CustomError(result.message, 500);

    return result;
  }

  static async airtime(payload: any) {
    const { amount, billing, country: code, number: phone } = payload;

    const uuid = randomUUID();

    // Find country code
    const country = findItem(countryCodes, code, 'code');

    // Format phone number
    const number = formatPhoneNumber(phone, country?.dial_code!);

    console.log({
      mrcReference: uuid,
      countryCode: Number(country?.dial_code.split('+')[1]) + '',
      number: number + '',
      billing: billing,
      amount: parseFloat(amount).toFixed(2) + '',
    })

    const res = await Client.post('/payment/airtime', {
      mrcReference: uuid,
      countryCode: Number(country?.dial_code.split('+')[1]) + '',
      number: number + '',
      billing: billing,
      amount: parseFloat(amount).toFixed(2) + '',
    });
    const { data: result } = res;

    if (result.code !== 200) throw new CustomError(result.message, 500);

    return result;
  }
}
