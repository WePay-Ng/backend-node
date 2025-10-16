/*
  Warnings:

  - A unique constraint covering the columns `[walletId]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Ledger" ADD COLUMN     "journalId" CHAR(36);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."JournalEntry" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "reference" TEXT,
    "transferId" CHAR(36),
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postedAt" TIMESTAMP(3),

    CONSTRAINT "JournalEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "JournalEntry_transferId_idx" ON "public"."JournalEntry"("transferId");

-- CreateIndex
CREATE INDEX "JournalEntry_reference_idx" ON "public"."JournalEntry"("reference");

-- CreateIndex
CREATE INDEX "Ledger_walletId_idx" ON "public"."Ledger"("walletId");

-- CreateIndex
CREATE INDEX "Ledger_journalId_idx" ON "public"."Ledger"("journalId");

-- CreateIndex
CREATE INDEX "Ledger_transferId_idx" ON "public"."Ledger"("transferId");

-- CreateIndex
CREATE INDEX "Transfer_fromWalletId_idx" ON "public"."Transfer"("fromWalletId");

-- CreateIndex
CREATE INDEX "Transfer_toWalletId_idx" ON "public"."Transfer"("toWalletId");

-- CreateIndex
CREATE INDEX "Transfer_createdAt_idx" ON "public"."Transfer"("createdAt");

-- CreateIndex
CREATE INDEX "Wallet_userId_idx" ON "public"."Wallet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_walletId_key" ON "public"."Wallet"("walletId");

-- AddForeignKey
ALTER TABLE "public"."Ledger" ADD CONSTRAINT "Ledger_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "public"."JournalEntry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
