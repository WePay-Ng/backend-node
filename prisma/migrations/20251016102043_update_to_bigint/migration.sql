-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AlterTable
ALTER TABLE "public"."Wallet" ALTER COLUMN "availableBalance" SET DATA TYPE BIGINT,
ALTER COLUMN "ledgerBalance" SET DATA TYPE BIGINT;
