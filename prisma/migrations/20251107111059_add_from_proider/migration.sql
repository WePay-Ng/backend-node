-- AlterTable
ALTER TABLE "public"."Transfer" ADD COLUMN     "fromProviderId" CHAR(36),
ALTER COLUMN "fromWalletId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
