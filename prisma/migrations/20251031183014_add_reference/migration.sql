-- AlterTable
ALTER TABLE "public"."Airtime" ADD COLUMN     "reference" TEXT;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
