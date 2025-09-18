/*
  Warnings:

  - You are about to drop the column `verificationId` on the `Agent` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Agent" DROP CONSTRAINT "Agent_verificationId_fkey";

-- AlterTable
ALTER TABLE "public"."Agent" DROP COLUMN "verificationId";

-- AlterTable
ALTER TABLE "public"."Verification" ADD COLUMN     "agentId" CHAR(36);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AddForeignKey
ALTER TABLE "public"."Verification" ADD CONSTRAINT "Verification_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "public"."Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
