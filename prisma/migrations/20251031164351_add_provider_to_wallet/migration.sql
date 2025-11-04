-- DropForeignKey
ALTER TABLE "public"."Ledger" DROP CONSTRAINT "Ledger_walletId_fkey";

-- AlterTable
ALTER TABLE "public"."Ledger" ADD COLUMN     "providerId" CHAR(36),
ALTER COLUMN "walletId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AddForeignKey
ALTER TABLE "public"."Ledger" ADD CONSTRAINT "Ledger_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "public"."Wallet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Ledger" ADD CONSTRAINT "Ledger_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;
