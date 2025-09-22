import { prisma } from '@/prisma/client';
import { Business } from '@/types/types';
import CustomError from '@/utils/customError';

export async function createBusiness(id: string, payload: Business) {
  const data: Record<string, unknown> = {};

  if (payload.address) {
    const a = await prisma.address.create({
      data: {
        ...payload.address,
      },
    });

    data.addressId = a.id;
  }

  if (payload.bank) {
    data.banks = {
      create: {
        accountName: payload?.bank?.accountName!,
        accountNumber: Number(payload?.bank?.accountNumber!),
        name: payload?.bank?.name!,
        type: payload?.bank?.type!,
      },
    };
  }

  const business = await prisma.business.create({
    data: {
      category: payload.category,
      name: payload.name,
      contactEmail: payload.contactEmail,
      contactPhone: payload.contactPhone,
      merchantId: id,
      ...data,
    },
  });

  return business;
}

export async function addVerification(id: string, data: any) {
  if (!data.documents.length)
    throw new CustomError('At least one document required', 422);

  //   Check for business
  const business = await prisma.business.findUnique({
    where: { id },
  });
  if (!business) throw new CustomError('Business not found', 500);

  const verification = await prisma.verification.create({
    data: {
      businessId: id,
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
