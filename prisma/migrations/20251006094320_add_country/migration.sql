-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "country" VARCHAR(100);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
