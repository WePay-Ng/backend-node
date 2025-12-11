-- CreateEnum
CREATE TYPE "public"."TransferKind" AS ENUM ('OUT', 'IN');

-- AlterTable
ALTER TABLE "public"."Transfer" ADD COLUMN     "kind" "public"."TransferKind" NOT NULL DEFAULT 'OUT';

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
