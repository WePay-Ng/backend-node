-- AlterTable
ALTER TABLE "public"."JournalEntry" ADD COLUMN     "metadata" JSONB;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
