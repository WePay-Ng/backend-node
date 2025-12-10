import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { User, Wallet } from '@prisma/client';
import { prisma } from '@/prisma/client';
import otpGenerator from 'otp-generator';
import sendEmail from '@/extensions/mail-service/send-email';
import { Akuuk } from '@/extensions/akuuk';
import { environment } from '@/config/env';

export function fileDirName(meta: any) {
  const __filename = fileURLToPath(meta.url);

  const __dirname = dirname(__filename);

  return { __dirname, __filename };
}

export const useErrorParser = (err: { message: string; status: number }) => {
  console.log(err);
  return {
    message: err.message.includes('prisma')
      ? 'Internal Server Error'
      : (err?.message ?? 'Internal Server Error'),
    status: err?.status ?? 500,
    success: false,
  };
};

export function generateRandomNumber(size: number): number {
  if (size <= 0) throw new Error('Size must be greater than 0');
  const min = Math.pow(10, size - 1);
  const max = Math.pow(10, size) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isTestingBVN(bvn: string) {
  return (
    ['DEVELOP', 'LOCAL'].includes(environment.context) &&
    ['22222222222', '95888168924'].includes(bvn)
  );
}

export function isDev() {
  return ['DEVELOP', 'LOCAL'].includes(environment.context);
}

export const QUEUE_NAMES = {
  TRANSFER: 'transfer',
  AIRTIME: 'airtime',
  NOTIFICATION: 'notification',
  INTERNAL_TRANSFER: 'internal_transfer',
  CREATEWALLET: 'create_wallet',
} as const;

export async function sendOTP(user: User, type = 'PHONE') {
  const code = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  const verification = await prisma.verificationIntent.create({
    data: {
      refreshCode: code,
      userId: user.id,
      type: type === 'PHONE' ? 'PHONE' : 'EMAIL',
    },
  });

  if (!verification) throw new Error('OTP not saved');

  // Send SMS
  if (user.phone && type === 'PHONE')
    Akuuk.sendSMS({
      country: user?.country ?? 'NG',
      number: user.phone,
      message: `Your WePay verification code is: ${code}. Thanks you for choosing WePay`,
    }).catch((e) => console.log(e));

  if (user.email && type === 'EMAIL')
    sendEmail({
      to: user?.email!,
      variables: {
        code: code,
        email: user.email,
        to_name: user.name,
      },
      template: 'verification',
    }).catch((e) => console.log(e));
}

export function formatPhoneNumber(number: string | number, dailCode: string) {
  return number.toString().length > 11
    ? number
    : Number(`${dailCode.split('+')[1]}${number.toString().substring(1)}`);
}

export const DAILY_LIMITS = {
  TIER_1: 200_000n,
  TIER_2: 1_000_000n,
  TIER_3: 5_000_000n,
  TIER_4: 100_000_000_000n,
};

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

export function formatCurrency(amount: any) {
  return new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(date: Date | any) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // convert 0 → 12 for 12 AM

  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}

export function findItem(data: Array<any>, item: string, field: string) {
  return data.find(
    (d) => d?.[field]?.toLowerCase()?.trim() === item?.toLowerCase()?.trim(),
  );
}

/**
 * Acquire row locks for wallets in canonical order inside a transaction.
 * Returns wallet rows.
 */
export async function lockWalletsTx(tx: any, walletIds: string[]) {
  // ensure canonical order to avoid deadlocks
  const ordered = [...walletIds].sort();
  // build parameterized query
  const placeholders = ordered.map((_, i) => `$${i + 1}`).join(',');
  // NOTE: we assume table name "Wallet" and column "id"
  const rows = await tx.$queryRawUnsafe(
    `SELECT * FROM "Wallet" WHERE id IN (${placeholders}) FOR UPDATE`,
    ...ordered,
  );
  // return rows as-is
  return rows;
}

export function amountInKobo(amount: number) {
  return BigInt(Math.round(amount * 100));
}

export function amountInNaira(amount: any) {
  return Number(amount) / 100;
}

export async function checkDailyLimit(
  fromWallet: Wallet,
  fromUser: User,
  amt: bigint,
) {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const totalTransferredToday = await prisma.transfer.aggregate({
    _sum: { amount: true },
    where: {
      fromWalletId: fromWallet.id,
      createdAt: { gte: todayStart },
      status: { in: ['PENDING', 'COMPLETED'] },
    },
  });

  const transferred = BigInt(totalTransferredToday._sum.amount || 0);

  const tier = fromUser.currentTier as keyof typeof DAILY_LIMITS;
  const dailyLimit = DAILY_LIMITS[tier] || DAILY_LIMITS.TIER_1;

  return transferred + amt > dailyLimit;
}

function wrapText(text?: string, max = 32) {
  if (!text) return;
  const words = text.split(' ');
  let lines: string[] = [];
  let current = '';

  for (const w of words) {
    if ((current + ' ' + w).trim().length > max) {
      lines.push(current.trim());
      current = w;
    } else {
      current += ' ' + w;
    }
  }

  if (current.trim().length > 0) lines.push(current.trim());
  return lines.join('\n');
}

function shortenDesc(desc?: string, max = 30) {
  if (!desc) return desc;
  if (desc.length <= max) return desc;
  return desc.slice(0, max - 3) + '...';
}

export function formatTransferSMS({
  account,
  amount,
  desc,
  currency,
  balance,
  date,
  type,
}: {
  account: string;
  amount: bigint;
  desc?: string;
  currency: string;
  date: Date;
  type: string;
  balance: bigint;
}) {
  return `
Acct: ******${account.slice(-4)}
Amt: ${currency}${formatCurrency(amountInNaira(amount))} ${type}
Desc: ${wrapText(shortenDesc(desc))}
Avail Bal: ${currency}${formatCurrency(amountInNaira(balance))}
Date: ${formatDate(date)}
Thanks for using WePay`;
}
