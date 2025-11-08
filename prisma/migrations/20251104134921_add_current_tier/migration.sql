-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "currentTier" TEXT NOT NULL DEFAULT 'TIER_1';

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
