import { prisma } from '../../prisma/client';
import { hashPassword, hashToken, verifyPin } from '../../utils/hash';
import { nanoid } from 'nanoid';
import { environment } from '../../config/env';
import { signAccessToken } from '../../utils/jwt';
import { addDays } from 'date-fns';
import { Login, Register, ResetPassword } from '../../types/types';
import { getUser } from '@/utils/getUser';
import { User } from '@prisma/client';
import Bottleneck from 'bottleneck';
import { sendOTP } from '@/utils';
import CustomError from '@/utils/customError';

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 333,
});

// export async function register(data: Register) {
//   if (data?.email) {
//     const existing = await prisma.user.findFirst({
//       where: { email: data.email },
//     });
//     if (existing) throw new Error('Email already in use');
//   }
//   // Prepare the user creation data
//   const record: Record<string, unknown> = {
//     ...data.extra,
//   };

//   if (data.role === 'AGENT')
//     record.agent = {
//       create: {},
//     };

//   if (data.role === 'MERCHANT')
//     record.merchant = {
//       create: {},
//     };

//   if (data.role === 'INSTITUTION')
//     record.merchant = {
//       create: {},
//     };

//   // hash bvn
//   let bvnHash = hashToken(data.bvn);
//   if (data.role === 'USER') bvnHash = data.bvn; //Hashing will come when user add emails
//   if (data?.email !== undefined) record.email = data.email;

//   const user = await prisma.$transaction(async (tx) => {
//     const _user = await tx.user.create({
//       data: {
//         bvn: bvnHash,
//         ...record,
//       },
//       include: { address: true },
//     });

//     await tx.auditLog.create({
//       data: { userId: _user.id, action: 'REGISTER', ip: null },
//     });

//     return _user;
//   });

//   limiter.schedule(() => sendOTP(user));

//   return user;
// }


export async function register(data: Register) {
  if (data?.email) {
    const existing = await prisma.user.findFirst({
      where: { email: data.email },
    });
    if (existing) throw new Error('Email already in use');
  }

  const record: Record<string, unknown> = {
    ...data.extra,
  };

  if (data.role === 'AGENT') record.agent = { create: {} };
  if (data.role === 'MERCHANT' || data.role === 'INSTITUTION') record.merchant = { create: {} };

  // Hash BVN
  let bvnHash = hashToken(data.bvn);
  if (data.role === 'USER') bvnHash = data.bvn;

  if (data?.email !== undefined) record.email = data.email;

  // // Hash transaction PIN from payload
  // if (!data.pin) throw new Error('Transaction PIN is required');
  // const pinHash = hashToken(data.pin);
  // record.transactionPin = pinHash;

  const user = await prisma.$transaction(async (tx) => {
    const _user = await tx.user.create({
      data: {
        bvn: bvnHash,
        ...record,
      },
      include: { address: true },
    });

    await tx.auditLog.create({
      data: { userId: _user.id, action: 'REGISTER', ip: null },
    });

    return _user;
  });

  limiter.schedule(() => sendOTP(user));

  return user;
}



export async function forgotPin(payload: {phone?: string; email?: string;}): Promise<boolean> {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          phone: payload?.phone,
        },
        {
          email: payload?.email,
        },
      ],
    },
  });

  if (!user) return false;

  limiter.schedule(() => sendOTP(user));

  await prisma.auditLog.create({
    data: { userId: user.id, action: 'FORGOT_PIN_CODE' },
  });
  return true;
}

// export async function login(data: Login) {
//   const { email, phone, pin } = data;

//   if (!pin) throw new CustomError('PIN is required', 422);
//   if (!email && !phone)
//     throw new CustomError('Email or phone is required', 422);

//   // Find user by email or phone
//   const user = await prisma.user.findFirst({
//     where: {
//       OR: [
//         email ? { email } : undefined,
//         phone ? { phone } : undefined
//       ].filter(Boolean) as any
//     }
//   });

//   if (!user) throw new CustomError('Invalid credentials', 401);

//   if (!user.pin)
//     throw new CustomError('User has no pin set', 400);

//   const ok = await verifyPin(user.pin, pin);

//   if (!ok) {
//     // Optional: increment failed login attempts here
//     await prisma.auditLog.create({
//       data: { userId: user.id, action: 'FAILED_LOGIN' },
//     });

//     throw new CustomError('Invalid credentials', 401);
//   }

//   // Successful login → Log it
//   await prisma.auditLog.create({
//     data: { userId: user.id, action: 'LOGIN' },
//   });

//   return user;
// }


export async function login(data: { pin: string }) {
  const { pin } = data;

  if (!pin) throw new CustomError("PIN is required", 422);

  const users = await prisma.user.findMany({
    where: {}
  });

  // Try matching each (because PIN is hashed)
  let matchedUser = null;

  for (const u of users) {
    if (u.pin && await verifyPin(u.pin, pin)) {
      matchedUser = u;
      break;
    }
  }

  if (!matchedUser) {
    throw new CustomError("Invalid PIN", 401);
  }

  await prisma.auditLog.create({
    data: { userId: matchedUser.id, action: "LOGIN" },
  });

  return matchedUser;
}


export async function loginWithFinger(data: { fingerPrint: string }) {
  const { fingerPrint } = data;

  if (!fingerPrint) {
    throw new CustomError("Finger is required or invalid finger data", 422);
  }

  // Find user directly by fingerprint
  const user = await prisma.user.findFirst({
    where: { fingerPrint: fingerPrint }
  });

  if (!user) {
    throw new CustomError("Invalid fingerprint", 401);
  }

  // Log successful login
  await prisma.auditLog.create({
    data: { userId: user.id, action: "LOGIN" },
  });

  return user;
}


export async function forgotPassword(data: { email: string; ip?: string }) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) return false;

  limiter.schedule(() => sendOTP(user));

  await prisma.auditLog.create({
    data: { userId: user.id, action: 'FORGOT_PASSWORD_CODE', ip: data.ip },
  });

  return true;
}

export async function resetPassword(data: ResetPassword) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error('Invalid or expired token');

  const newHash = await hashPassword(data.newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: newHash,
    },
  });

  // revoke all refresh tokens (safety)
  await prisma.verificationIntent.deleteMany({ where: { userId: user.id } });
  await prisma.auditLog.create({
    data: { userId: user.id, action: 'RESET_PASSWORD', ip: data.ip },
  });
  return user;
}

export async function resetPin(user: User, data: { pin: string }) {
  await prisma.user.update({
    where: { id: user.id },
    data: {
      pin: data.pin,
    },
  });

  // revoke all refresh tokens (safety)
  await prisma.verificationIntent.deleteMany({ where: { userId: user.id } });
  await prisma.auditLog.create({
    data: { userId: user.id, action: 'RESET_PIN' },
  });
  return user;
}

export async function rotateRefreshToken(
  oldTokenRaw: string,
  ip?: string,
  deviceInfo?: string,
) {
  const oldHash = hashToken(oldTokenRaw);
  const existing = await prisma.refreshToken.findUnique({
    where: { tokenHash: oldHash },
  });
  if (!existing || existing.expiresAt < new Date())
    throw new Error('Invalid refresh token');

  const user = await prisma.user.findUnique({ where: { id: existing.userId } });
  if (!user) throw new Error('User not found');

  const newRaw = nanoid(64);
  const newHash = hashToken(newRaw);
  const newExpires = addDays(new Date(), Number(environment.jwt.refreshDays));

  await prisma.$transaction([
    prisma.refreshToken.delete({ where: { id: existing.id } }),
    prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: newHash,
        expiresAt: newExpires,
        deviceInfo,
      },
    }),
    prisma.auditLog.create({
      data: { userId: user.id, action: 'REFRESH_ROTATED', ip },
    }),
  ]);

  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  return {
    accessToken,
    refreshToken: newRaw,
    user: { id: user.id, email: user.email, role: user.role },
  };
}

export async function logout(refreshTokenRaw?: string, ip?: string) {
  if (!refreshTokenRaw) return;
  const hash = hashToken(refreshTokenRaw);
  await prisma.refreshToken.deleteMany({ where: { tokenHash: hash } });
  // audit log optional
}

export async function resendOTP(userId: string) {
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) throw new CustomError('User not found', 500);

  limiter.schedule(() => sendOTP(user));

  return true;
}

