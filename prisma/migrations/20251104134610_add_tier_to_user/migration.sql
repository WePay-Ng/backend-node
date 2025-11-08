-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "tierId" CHAR(36);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_tierId_fkey" FOREIGN KEY ("tierId") REFERENCES "public"."TierLimit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
