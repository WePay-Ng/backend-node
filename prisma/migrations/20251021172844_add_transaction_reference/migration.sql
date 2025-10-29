-- CreateEnum
CREATE TYPE "public"."TransferType" AS ENUM ('INTERNAL', 'EXTERNAL');

-- AlterTable
ALTER TABLE "public"."Transfer" ADD COLUMN     "shouldRefund" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "transactionReference" TEXT,
ADD COLUMN     "type" "public"."TransferType" NOT NULL DEFAULT 'INTERNAL';

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
