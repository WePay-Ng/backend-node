import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { User, VerificationIntentType } from '@prisma/client';
import { prisma } from '@/prisma/client';
import otpGenerator from 'otp-generator';
import sendEmail from '@/extensions/mail-service/send-email';

export function fileDirName(meta: any) {
  const __filename = fileURLToPath(meta.url);

  const __dirname = dirname(__filename);

  return { __dirname, __filename };
}

export const useErrorParser = (err: { message: string; status: number }) => {
  return {
    message: err.message ?? 'Internal Server Error',
    status: err?.status ?? 500,
    success: false,
  };
};

export async function sendOTP(
  user: User,
  type: VerificationIntentType = 'EMAIL',
) {
  const code = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  const verification = await prisma.verificationIntent.create({
    data: {
      refreshCode: code,
      userId: user.id,
      type,
    },
  });

  if (!verification) throw new Error('OTP not saved');

  await sendEmail({
    to: user.email,
    variables: {
      code: code,
      email: user.email,
      to_name: user.name,
      // BASE_URL: data?.BASE_URL,
    },
    template: 'verification',
  });
}

/**
 * Converts any valid date string, timestamp, or Date object
 * to a standard ISO 8601 date string.
 *
 * @param {string | number | Date} input - The date input to convert.
 * @returns {string | null} The ISO date string or null if invalid.
 */
export function toISODate(input: string | number | Date): string | null {
  try {
    // Handle empty or undefined input
    if (!input) return null;

    // Convert to Date object
    const date = new Date(input);

    // Check validity
    if (isNaN(date.getTime())) {
      return null; // Invalid date
    }

    // Return ISO string
    return date.toISOString();
  } catch (err) {
    return null;
  }
}

export function findItem(data: Array<any>, item: string, field: string) {
  return data.find((d) => d[field] === item);
}
