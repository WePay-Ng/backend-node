-- DropForeignKey
ALTER TABLE "public"."Agent" DROP CONSTRAINT "Agent_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Agent" ALTER COLUMN "userId" SET DATA TYPE VARCHAR(36);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
