/*
  Warnings:

  - A unique constraint covering the columns `[itemId]` on the table `transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateIndex
CREATE UNIQUE INDEX "transaction_itemId_key" ON "public"."transaction"("itemId");
