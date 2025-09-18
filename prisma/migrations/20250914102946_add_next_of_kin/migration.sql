/*
  Warnings:

  - You are about to drop the column `businessName` on the `Agent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Agent" DROP COLUMN "businessName";

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."NextOfKin" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "relationship" TEXT NOT NULL,
    "agentId" CHAR(36) NOT NULL,

    CONSTRAINT "NextOfKin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NextOfKin_phone_key" ON "public"."NextOfKin"("phone");

-- AddForeignKey
ALTER TABLE "public"."NextOfKin" ADD CONSTRAINT "NextOfKin_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "public"."Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
