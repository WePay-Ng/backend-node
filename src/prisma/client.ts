// src/prisma/client.ts
(BigInt.prototype as any).toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  // log: ['query', 'error', 'warn'],
});
