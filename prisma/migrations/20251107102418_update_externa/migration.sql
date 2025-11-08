-- AlterEnum
ALTER TYPE "public"."TransferStatus" ADD VALUE 'PROCESSING';

-- AlterTable
ALTER TABLE "public"."Transfer" ADD COLUMN     "provider" TEXT NOT NULL DEFAULT 'EMBEDLY',
ALTER COLUMN "toWalletId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
