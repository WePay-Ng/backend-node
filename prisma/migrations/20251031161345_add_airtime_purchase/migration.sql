-- CreateEnum
CREATE TYPE "public"."AirtimeStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED');

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."Airtime" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "idempotencyKey" TEXT,
    "userId" CHAR(36) NOT NULL,
    "walletId" CHAR(36) NOT NULL,
    "provider" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'NGN',
    "status" "public"."AirtimeStatus" NOT NULL DEFAULT 'PENDING',
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ledgerEntryId" CHAR(36),

    CONSTRAINT "Airtime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airtime_idempotencyKey_key" ON "public"."Airtime"("idempotencyKey");

-- AddForeignKey
ALTER TABLE "public"."Airtime" ADD CONSTRAINT "Airtime_ledgerEntryId_fkey" FOREIGN KEY ("ledgerEntryId") REFERENCES "public"."Ledger"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Airtime" ADD CONSTRAINT "Airtime_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Airtime" ADD CONSTRAINT "Airtime_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "public"."Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
