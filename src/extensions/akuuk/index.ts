import { environment } from '@/config/env';
import CustomError from '@/utils/customError';
import axios from 'axios';
import { randomUUID } from 'crypto';
import { countryCodes } from './utils';

type SMSInput = {
  country: string;
  number: number | string;
  message: string;
};

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
    const country = countryCodes.find(
      (country) => country.code.toLowerCase() === payload.country.toLowerCase(),
    );

    // Format phone number
    const number = Number(
      `${country?.dial_code.split('+')[1]}${payload.number.toString().substring(0)}`,
    );

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
}
