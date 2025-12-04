-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "uniqueID" VARCHAR(8);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
