/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `Fee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateIndex
CREATE UNIQUE INDEX "Fee_transactionId_key" ON "public"."Fee"("transactionId");
