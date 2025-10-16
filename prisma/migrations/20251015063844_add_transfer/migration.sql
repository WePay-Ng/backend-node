-- CreateEnum
CREATE TYPE "public"."TransferStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."LedgerType" AS ENUM ('TRANSFER_DEBIT', 'TRANSFER_CREDIT', 'FEE', 'ADJUSTMENT');

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AlterTable
ALTER TABLE "public"."Wallet" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "reservedBalance" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "version" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "public"."Transfer" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "idempotencyKey" TEXT,
    "fromWalletId" CHAR(36) NOT NULL,
    "toWalletId" CHAR(36) NOT NULL,
    "amount" BIGINT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'NGN',
    "status" "public"."TransferStatus" NOT NULL DEFAULT 'PENDING',
    "initiatedBy" TEXT,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ledger" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "walletId" CHAR(36) NOT NULL,
    "transferId" CHAR(36),
    "change" BIGINT NOT NULL,
    "balanceAfter" BIGINT NOT NULL,
    "type" "public"."LedgerType" NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ledger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OutboxEvent" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "aggregateId" TEXT,
    "topic" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "OutboxEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_idempotencyKey_key" ON "public"."Transfer"("idempotencyKey");

-- AddForeignKey
ALTER TABLE "public"."Ledger" ADD CONSTRAINT "Ledger_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "public"."Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Ledger" ADD CONSTRAINT "Ledger_transferId_fkey" FOREIGN KEY ("transferId") REFERENCES "public"."Transfer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
