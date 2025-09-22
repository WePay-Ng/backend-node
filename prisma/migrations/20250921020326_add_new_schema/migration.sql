/*
  Warnings:

  - You are about to drop the column `agentId` on the `NextOfKin` table. All the data in the column will be lost.
  - You are about to drop the column `activeBusinessId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nextOfKinId]` on the table `Agent` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Business" DROP CONSTRAINT "Business_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."NextOfKin" DROP CONSTRAINT "NextOfKin_agentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_activeBusinessId_fkey";

-- DropIndex
DROP INDEX "public"."NextOfKin_agentId_key";

-- AlterTable
ALTER TABLE "public"."Agent" ADD COLUMN     "nextOfKinId" CHAR(36);

-- AlterTable
ALTER TABLE "public"."NextOfKin" DROP COLUMN "agentId";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "activeBusinessId";

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateIndex
CREATE UNIQUE INDEX "Agent_nextOfKinId_key" ON "public"."Agent"("nextOfKinId");

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_nextOfKinId_fkey" FOREIGN KEY ("nextOfKinId") REFERENCES "public"."NextOfKin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
