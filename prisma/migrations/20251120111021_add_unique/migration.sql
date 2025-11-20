/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `Airtime` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transactionReference]` on the table `Transfer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateIndex
CREATE UNIQUE INDEX "Airtime_reference_key" ON "public"."Airtime"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_transactionReference_key" ON "public"."Transfer"("transactionReference");
