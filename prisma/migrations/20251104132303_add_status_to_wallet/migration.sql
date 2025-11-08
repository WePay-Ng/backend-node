-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AlterTable
ALTER TABLE "public"."Wallet" ADD COLUMN     "status" "public"."Status" NOT NULL DEFAULT 'INACTIVE';
