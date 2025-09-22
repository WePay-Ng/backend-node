/*
  Warnings:

  - You are about to drop the column `internetAccess` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `operatingHours` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `operationDays` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `terminals` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `userBase` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `verificationId` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `Business` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[merchantId]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merchantId` to the `Business` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Business" DROP COLUMN "internetAccess",
DROP COLUMN "operatingHours",
DROP COLUMN "operationDays",
DROP COLUMN "startedAt",
DROP COLUMN "terminals",
DROP COLUMN "type",
DROP COLUMN "userBase",
DROP COLUMN "userId",
DROP COLUMN "verificationId",
DROP COLUMN "verified",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "contactEmail" TEXT,
ADD COLUMN     "contactPhone" TEXT,
ADD COLUMN     "merchantId" VARCHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "merchantId" CHAR(36);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."Merchant" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "userId" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_userId_key" ON "public"."Merchant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Business_merchantId_key" ON "public"."Business"("merchantId");

-- AddForeignKey
ALTER TABLE "public"."Merchant" ADD CONSTRAINT "Merchant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Business" ADD CONSTRAINT "Business_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "public"."Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
