import { hashPassword, hashPin, hashToken, verifyPin } from '@/utils/hash';
import { prisma } from '../../prisma/client';
import {
  Address,
  Bank,
  BVNInput,
  EmbedlyInput,
  iWallet,
  NextOfKin,
} from '../../types/types';
import CustomError from '@/utils/customError';
import { getUser } from '@/utils/getUser';
import { Embedly } from '@/extensions/embedly';
import { Youverify } from '@/extensions/you-verify';
import { toISODate } from '@/utils';

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

export async function createEmbedlyUser(userId: string, data: EmbedlyInput) {
  const embedly = await Embedly.customers.personal({
    address: data?.embedly?.address ?? '19 Prince Okey street',
    city: data?.embedly?.city ?? 'Port harcourt',
    country: data?.embedly?.country,
    dob: data?.embedly?.dob,
    firstName: data?.embedly?.firstName,
    lastName: data?.embedly?.lastName,
    mobileNumber: data?.embedly?.phone,
    middleName: data?.embedly?.middleName ?? data?.embedly?.lastName,
    emailAddress: data.email,
  });

  if (!embedly) return;

  const [user, verified] = await Promise.all([
    update(userId, {
      embedlyCustomerId: embedly?.id,
    }),
    Embedly.customers.verifyKYC({
      bvn: data.bvn,
      customerId: embedly?.id,
    }),
  ]);

  if (!verified) return;

  await hashBVN(userId, data?.bvn!);
  const wallet = await createWallet({
    customerId: user?.embedlyCustomerId ?? embedly.id,
    currency: 'NGN',
    name: user?.name!,
  });

  return wallet;
}

export async function getBVNData(value: BVNInput) {
  const data = await Youverify.verifyBVN({
    id: value.bvn,
    isSubjectConsent: true,
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

export async function createWallet(payload: iWallet) {
  const user = await prisma.user.findFirst({
    where: { embedlyCustomerId: payload.customerId },
  });
  if (!user) throw new CustomError('Customer not found on embedly', 500);

  const result = await Embedly.wallets.create(payload);

  // Create user wallet
  const userWallet = await prisma.wallet.create({
    data: {
      accountNumber: result.virtualAccount.accountNumber,
      bankCode: result.virtualAccount.bankCode,
      bankName: result.virtualAccount.bankName,
      walletId: result?.id,
      availableBalance: 0,
      ledgerBalance: 0,
      userId: user.id,
    },
  });

  return userWallet;
}
