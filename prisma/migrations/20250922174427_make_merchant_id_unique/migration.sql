-- DropIndex
DROP INDEX "public"."Business_merchantId_key";

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
