-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
