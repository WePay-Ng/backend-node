/*
  Warnings:

  - You are about to alter the column `accountNumber` on the `Wallet` table. The data in that column could be lost. The data in that column will be cast from `Char(11)` to `Char(10)`.

*/
-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AlterTable
ALTER TABLE "public"."Wallet" ALTER COLUMN "accountNumber" SET DATA TYPE CHAR(10);
