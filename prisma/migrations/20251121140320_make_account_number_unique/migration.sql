/*
  Warnings:

  - A unique constraint covering the columns `[accountNumber]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_accountNumber_key" ON "public"."Wallet"("accountNumber");
