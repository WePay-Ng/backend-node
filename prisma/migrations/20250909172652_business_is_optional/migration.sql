-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_activeBusinessId_fkey";

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "activeBusinessId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_activeBusinessId_fkey" FOREIGN KEY ("activeBusinessId") REFERENCES "public"."Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;
