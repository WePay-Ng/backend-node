import { hashPassword, hashPin, hashToken, verifyPin } from '@/utils/hash';
import { prisma } from '../../prisma/client';
import {
  Address,
  Bank,
  BVNInput,
  EmbedlyInput,
  NextOfKin,
} from '../../types/types';
import CustomError from '@/utils/customError';
import { getUser } from '@/utils/getUser';
import { Embedly } from '@/extensions/embedly';
import { Youverify } from '@/extensions/you-verify';
import { toISODate } from '@/utils';
import { Queue } from '@/jobs/queues';
import { createWallet } from '../wallets/service';

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
    email?: string;
    embedlyCustomerId?: string;
  },
) {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) throw new CustomError('User not found', 200);

  return await prisma.$transaction(async (tx) => {
    // Base update
    const record: Record<string, unknown> = {};

    // TDOD: Remove password update from here
    if (data.email !== undefined) record.email = data.email;
    if (data.occupation !== undefined) record.occupation = data.occupation;
    if (data.education !== undefined) record.education = data.education;
    if (data.religion !== undefined) record.religion = data.religion;
    if (data.embedlyCustomerId !== undefined)
      record.embedlyCustomerId = data.embedlyCustomerId;
    if (data.maritalStatus !== undefined)
      record.maritalStatus = data.maritalStatus;
    if (data.emailVerified !== undefined)
      record.emailVerified = data.emailVerified;

    const user = await tx.user.update({
      where: { id },
      data: {
        ...record,
      },
      include: { address: true, agent: { select: { id: true } } },
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

export async function validateBVN(bvn: string) {
  const bvnHash = hashToken(bvn);

  const existing = await prisma.user.findFirst({
    where: { bvn: bvnHash },
  });

  return !!existing;
}

export async function getUserByPhone(phone: string) {
  if (!phone) throw new CustomError('Phone Number is required', 422);

  const user = await prisma.user.findFirst({
    where: { phone: phone },
    select: {
      id: true,
      email: true,
      role: true,
      name: true,
      isLocked: true,
      status: true,
    },
  });

  if (!user) throw new CustomError('User not found', 404);

  return user;
}

export async function getUserByID(ID: string) {
  if (!ID) throw new CustomError('Wepay ID is required', 422);

  const user = await prisma.user.findFirst({
    where: { uniqueID: ID },
    select: {
      id: true,
      email: true,
      role: true,
      name: true,
      isLocked: true,
      status: true,
    },
  });

  if (!user) throw new CustomError('User not found', 404);

  return user;
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

export async function hashBVN(id: string, bvn: string) {
  if (bvn === undefined) throw new CustomError('Bvn is required', 422);

  const bvnHash = hashToken(bvn);

  const user = await prisma.user.update({
    where: { id },
    data: {
      bvn: bvnHash,
    },
  });

  return user;
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

  const user = await prisma.$transaction(async (tx) => {
    const user = await prisma.user.update({
      where: { id },
      data: {
        pin: hashedPin,
      },
      include: { address: true },
    });

    if (user.embedlyCustomerId) return user;

    await tx.outboxEvent.create({
      data: {
        aggregateId: user.id,
        topic: 'embedly.user.wallet.creation.initiated',
        payload: {
          userId: user.id,
          streetLine: user?.address?.streetLine,
          city: user.address?.city,
          country: user.address?.country,
          dob: user.dob,
          name: user.name,
          phone: user.phone,
          email: user.email,
          bvn: user.bvn,
        },
      },
    });
    return user;
  });

  if (!user.embedlyCustomerId) await Queue.trigger(user.id, 'CREATEWALLET');

  return user;
}

export async function verifyUserPin(
  hashedPin: string,
  payload: { pin: string },
) {
  return await verifyPin(hashedPin, payload.pin);
}

export async function createEmbedlyUser(userId: string, data: EmbedlyInput) {
  const embedly = await Embedly.customers.personal({
    address: data?.embedly?.address,
    city: data?.embedly?.city,
    country: data?.embedly?.country,
    dob: data?.embedly?.dob,
    firstName: data?.embedly?.firstName,
    lastName: data?.embedly?.lastName,
    mobileNumber: data?.embedly?.phone,
    middleName: data?.embedly?.middleName ?? data?.embedly?.lastName,
    emailAddress: data.email,
  });

  if (!embedly) return;

  await update(userId, {
    embedlyCustomerId: embedly?.id,
  });

  const verified = await Embedly.customers.verifyKYC({
    bvn: data.bvn,
    customerId: embedly?.id,
  });

  if (!verified) return;

  const wallet = await createWallet({
    userId: userId,
    currency: 'NGN',
  });

  if (!wallet) return;

  await hashBVN(userId, data?.bvn!);
  return wallet;
}

export async function getBVNData(value: BVNInput) {
  const data = await Youverify.verifyBVN({
    id: value.bvn,
    isSubjectConsent: true,
    premiumBVN: true,
  });

  return {
    ...value,
    extra: {
      name: data?.firstName + ' ' + data?.lastName,
      dob: toISODate(data?.dateOfBirth),
      country: data?.country,
      gender: data?.gender,
      phone: data?.mobile,
    },
    embedly: {
      dob: toISODate(data?.dateOfBirth),
      country: data?.country,
      gender: data?.gender,
      phone: data?.mobile,
      address: data?.address?.addressLine,
      city: data?.address?.town,
      firstName: data?.firstName,
      lastName: data?.lastName,
      middleName: data?.middleName,
    },
  };
}

export async function captureFingerPrint(
  id: string,
  payload: { fingerPrint: string },
) {
  // Optionally, hash the fingerprint before saving for security
  // const hashedFingerPrint = await hashPin(payload.fingerPrint);

  const user = await prisma.user.update({
    where: { id },
    data: {
      fingerPrint: payload.fingerPrint,
    },
    include: { address: true },
  });

  return user;
}
