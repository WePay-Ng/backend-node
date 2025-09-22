import { hashPassword, hashPin, verifyPin } from '@/utils/hash';
import { prisma } from '../../prisma/client';
import { Address, Bank, NextOfKin } from '../../types/types';
import CustomError from '@/utils/customError';
import { getUser } from '@/utils/getUser';

export async function update(
  id: string,
  data: {
    nextOfKin?: NextOfKin;
    bank?: Bank;
    address?: Address;
    emailVerified?: boolean;
    occupation?: string;
    education?: string;
    religion?: string;
    maritalStatus?: string;
  },
) {
  return await prisma.$transaction(async (tx) => {
    // Base update
    const record: Record<string, unknown> = {};

    // TDOD: Remove password update from here
    if (data.occupation !== undefined) record.occupation = data.occupation;
    if (data.education !== undefined) record.education = data.education;
    if (data.religion !== undefined) record.religion = data.religion;
    if (data.maritalStatus !== undefined)
      record.maritalStatus = data.maritalStatus;
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
    if (data?.nextOfKin && user.agent?.id) {
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

export async function addPassword(id: string, password: string) {
  if (password !== undefined)
    throw new CustomError('Password is required', 422);

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.update({
    where: { id },
    data: {
      password: hashedPassword,
    },
  });

  return await getUser(user);
}

export async function addVerification(id: string, data: any) {
  if (!data.documents.length)
    throw new CustomError('Atleast one ocument required', 422);

  const verification = await prisma.verification.create({
    data: {
      userId: id,
      documents: {
        create: data.documents.map((doc: any) => ({
          type: doc.type,
          fileUrl: doc.fileUrl,
        })),
      },
    },
    include: { documents: true },
  });

  return verification;
}

export async function createPin(id: string, payload: { pin: string }) {
  const hashedPin = await hashPin(payload.pin);

  const user = await prisma.user.update({
    where: { id },
    data: {
      pin: hashedPin,
    },
  });

  return user;
}

export async function verifyUserPin(
  hashedPin: string,
  payload: { pin: string },
) {
  return await verifyPin(hashedPin, payload.pin);
}
