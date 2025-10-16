import { prisma } from '../../prisma/client';
import { hashPassword, hashToken, verifyPin } from '../../utils/hash';
import { nanoid } from 'nanoid';
import { environment } from '../../config/env';
import { signAccessToken } from '../../utils/jwt';
import { addDays } from 'date-fns';
import {
  Address,
  Bank,
  Login,
  NextOfKin,
  Register,
  ResetPassword,
} from '../../types/types';
import { getUser } from '@/utils/getUser';
import { sendOTP } from '@/utils';
import { User } from '@prisma/client';

export async function register(data: Register) {
  if (data?.email) {
    const existing = await prisma.user.findFirst({
      where: { email: data.email },
    });
    if (existing) throw new Error('Email already in use');
  }
  // Prepare the user creation data
  const record: Record<string, unknown> = {
    ...data.extra,
  };

  if (data.role === 'AGENT')
    record.agent = {
      create: {},
    };

  if (data.role === 'MERCHANT')
    record.merchant = {
      create: {},
    };

  if (data.role === 'INSTITUTION')
    record.merchant = {
      create: {},
    };

  // hash bvn
  const bvnHash = hashToken(data.bvn);
  if (data?.email !== undefined) record.email = data.email;
  console.log(data.email);
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

  // TODO: Send OTP here
  await sendOTP(user);

  return await getUser(user);
}

export async function forgotPin(payload: {
  phone?: string;
  email?: string;
}): Promise<boolean> {
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

  // TODO: Send OTP here
  await sendOTP(user, payload.phone ? 'PHONE' : 'EMAIL');

  await prisma.auditLog.create({
    data: { userId: user.id, action: 'FORGOT_PASSWORD_CODE' },
  });
  return true;
}

export async function update(
  id: string,
  data: {
    password?: string;
    phone?: string;
    dob?: string;
    nextOfKin?: NextOfKin;
    bank?: Bank;
    address?: Address;
    emailVerified?: boolean;
  },
) {
  return await prisma.$transaction(async (tx) => {
    // Base update
    const record: Record<string, unknown> = {};
    if (data.password !== undefined) record.password = data.password;
    if (data.phone !== undefined) record.phone = data.phone;
    if (data.dob !== undefined) record.dob = data.dob;
    if (data.emailVerified !== undefined)
      record.emailVerified = data.emailVerified;

    const user = await tx.user.update({
      where: { id },
      data: {
        ...record,
      },
      include: { agent: { select: { id: true } } },
    });

    // Related updates
    if (data?.nextOfKin) {
      await tx.agent.update({
        where: { id: user.agent?.id },
        data: {
          nextOfKin: {
            create: { ...data.nextOfKin },
          },
        },
      });
    }

    if (data?.bank) {
      await tx.bank.create({
        data: {
          ...data.bank,
          userId: user.id,
          accountNumber: Number(data.bank.accountNumber),
        },
      });
    }

    if (data?.address) {
      await tx.user.update({
        where: { id: user.id },
        data: {
          address: { create: { ...data.address } },
        },
      });
    }

    return user;
  });
}

export async function login(data: Login) {
  const user = await prisma.user.findUnique({ where: { phone: data.phone } });
  if (!user) throw new Error('Invalid credentials');

  // account lockout
  const ok = await verifyPin(user.pin!, data.pin);
  if (!ok) {
    // increment failed attempts if you have fields; for now just log and throw
    await prisma.auditLog.create({
      data: { userId: user.id, action: 'FAILED_LOGIN' },
    });
    throw new Error('Invalid credentials');
  }

  // success: issue tokens
  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  const refreshRaw = nanoid(64);
  const refreshHash = hashToken(refreshRaw);
  const refreshExpires = addDays(
    new Date(),
    Number(environment.jwt.expiresIn.split(' ')[0]),
  );

  // persist refresh token server-side (requires RefreshToken model)
  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      tokenHash: refreshHash,
      expiresAt: refreshExpires,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId: user.id,
      action: 'LOGIN',
    },
  });

  return {
    accessToken: `Bearer ${accessToken}`,
    refreshToken: refreshRaw,
    user: await getUser(user),
  };
}

export async function forgotPassword(data: { email: string; ip?: string }) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) return false;

  await sendOTP(user, 'EMAIL');

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

export async function validateBVN(bvn: string) {
  const bvnHash = hashToken(bvn);

  const existing = await prisma.user.findFirst({
    where: { bvn: bvnHash },
  });

  return !!existing;
}
