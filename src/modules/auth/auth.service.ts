import { prisma } from '../../prisma/client';
import { hashPassword, verifyPassword, hashToken } from '../../utils/hash';
import { nanoid } from 'nanoid';
import { environment } from '../../config/env';
import { signAccessToken } from '../../utils/jwt';
import { addMinutes, addDays } from 'date-fns';
import {
  Address,
  Bank,
  Login,
  NextOfKin,
  Register,
  ResetPassword,
} from '../../types/types';
import { uploadImage } from '../../utils/fileUploader';

export async function register(data: Register) {
  // hash bvn
  const bvnHash = hashToken(data.bvn);

  const existing = await prisma.user.findFirst({
    where: { bvn: bvnHash },
  });

  if (existing) throw new Error('Email already in use');

  const record: Record<string, unknown> = {};

  if (data.role === 'AGENT') {
    record.agent = {
      create: {},
    };
  }

  const user = await prisma.user.create({
    data: {
      email: data?.email,
      bvn: bvnHash,
      role: data?.role ?? 'USER',
      ...data.extra,
      ...record,
    },
  });

  // TODO: Send OTP here

  prisma.auditLog.create({
    data: { userId: user.id, action: 'REGISTER', ip: null },
  });

  return user;
}

export async function update(
  id: string,
  data: {
    password?: string;
    phone?: string;
    nextOfKin?: NextOfKin;
    bank?: Bank;
    address?: Address;
  },
) {
  return await prisma.$transaction(async (tx) => {
    // Base update
    const user = await tx.user.update({
      where: { id },
      data: {
        ...(data.password && { password: data.password }),
        ...(data.phone && { phone: data.phone }),
      },
      include: { agent: { select: { id: true } } },
    });

    // Related updates
    if (data.nextOfKin && user.agent?.id) {
      await tx.nextOfKin.create({
        data: {
          ...data.nextOfKin,
          agentId: user.agent?.id!,
        },
      });
    }

    if (data.bank) {
      await tx.bank.create({
        data: {
          ...data.bank,
          userId: user.id,
          accountNumber: Number(data.bank.accountNumber),
        },
      });
    }

    if (data.address && user.agent?.id) {
      await tx.agent.update({
        where: { id: user.agent.id },
        data: {
          address: { create: { ...data.address } },
        },
      });
    }

    return user;
  });
}

export async function login(data: Login) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error('Invalid credentials');

  // account lockout

  const ok = await verifyPassword(user.password!, data.password);
  if (!ok) {
    // increment failed attempts if you have fields; for now just log and throw
    prisma.auditLog.create({
      data: { userId: user.id, action: 'FAILED_LOGIN', ip: data.ip },
    });
    throw new Error('Invalid credentials');
  }

  // success: issue tokens
  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  const refreshRaw = nanoid(64);
  const refreshHash = hashToken(refreshRaw);
  const refreshExpires = addDays(new Date(), Number(environment.jwt.expiresIn));

  // persist refresh token server-side (requires RefreshToken model)
  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      tokenHash: refreshHash,
      expiresAt: refreshExpires,
      deviceInfo: data.deviceInfo,
    },
  });

  prisma.auditLog.create({
    data: {
      userId: user.id,
      action: 'LOGIN',
      ip: data.ip,
      meta: { deviceInfo: data.deviceInfo },
    },
  });

  return {
    accessToken,
    refreshToken: refreshRaw,
    user: { id: user.id, email: user.email, role: user.role },
  };
}

export async function uploadFile(
  id: string,
  type: string,
  file: any,
  options?: Partial<Record<string, any>>,
) {
  if (!file) return;

  try {
    const url = await uploadImage(file, { prefix: options?.prefix });

    const data: Record<string, unknown> = {};

    if (type.includes('front')) data.IDFront = url;
    if (type.includes('back')) data.IDBack = url;
    if (type.includes('passport')) data.passport = url;
    if (type.includes('utility')) data.utility = url;
    if (type.includes('cac')) data.cac = url;

    const verification = await prisma.verification.create({
      data: {
        agent: { connect: { id } },
        IDType: type,
        ...data,
      },
    });

    return verification;
  } catch (error) {}
}

export async function forgotPassword(data: { email: string; ip?: string }) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) {
    return false;
  }

  const raw = nanoid(48);
  const tokenHash = hashToken(raw);
  const expires = addMinutes(new Date(), environment.password.passwordResetsIn);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      passwordResetTokenHash: tokenHash,
      passwordResetExpires: expires,
    },
  });

  prisma.auditLog.create({
    data: { userId: user.id, action: 'FORGOT_PASSWORD', ip: data.ip },
  });
}

export async function resetPassword(data: ResetPassword) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user || !user.passwordResetTokenHash || !user.passwordResetExpires) {
    throw new Error('Invalid or expired token');
  }

  if (user.passwordResetExpires < new Date()) throw new Error('Token expired');

  const tokenHash = hashToken(data.token);
  if (tokenHash !== user.passwordResetTokenHash)
    throw new Error('Invalid token');

  const newHash = await hashPassword(data.newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: newHash,
      passwordResetTokenHash: null,
      passwordResetExpires: null,
    },
  });

  // revoke all refresh tokens (safety)
  await prisma.refreshToken.deleteMany({ where: { userId: user.id } });
  await prisma.auditLog.create({
    data: { userId: user.id, action: 'RESET_PASSWORD', ip: data.ip },
  });
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
