-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "fingerPrint" TEXT;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
