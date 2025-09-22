/*
  Warnings:

  - You are about to drop the column `addressId` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `contactEmail` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhone` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `licenseNumber` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `nextOfKin` on the `Agent` table. All the data in the column will be lost.
  - The primary key for the `Verification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IDBack` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `IDFront` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `IDType` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `MEMART` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `agentId` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `authorityLetter` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `biometric` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `cac` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `passport` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `tin` on the `Verification` table. All the data in the column will be lost.
  - You are about to drop the column `utility` on the `Verification` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[agentId]` on the table `NextOfKin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Verification` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."DocumentType" AS ENUM ('PASSPORT', 'NATIONAL_ID', 'DRIVER_LICENSE', 'UTILITY_BILL', 'VOTER_CARD', 'CAC', 'MEMART', 'IDFRONT', 'IDBACK', 'AUTHORITY_LETTER');

-- CreateEnum
CREATE TYPE "public"."VerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."UserRole" ADD VALUE 'INSTITUTION';
ALTER TYPE "public"."UserRole" ADD VALUE 'MERCHANT';

-- DropForeignKey
ALTER TABLE "public"."Agent" DROP CONSTRAINT "Agent_addressId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Business" DROP CONSTRAINT "Business_verificationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Verification" DROP CONSTRAINT "Verification_agentId_fkey";

-- DropIndex
DROP INDEX "public"."Agent_contactPhone_key";

-- AlterTable
ALTER TABLE "public"."Agent" DROP COLUMN "addressId",
DROP COLUMN "category",
DROP COLUMN "contactEmail",
DROP COLUMN "contactPhone",
DROP COLUMN "licenseNumber",
DROP COLUMN "nationality",
DROP COLUMN "nextOfKin";

-- AlterTable
ALTER TABLE "public"."Verification" DROP CONSTRAINT "Verification_pkey",
DROP COLUMN "IDBack",
DROP COLUMN "IDFront",
DROP COLUMN "IDType",
DROP COLUMN "MEMART",
DROP COLUMN "agentId",
DROP COLUMN "authorityLetter",
DROP COLUMN "biometric",
DROP COLUMN "cac",
DROP COLUMN "passport",
DROP COLUMN "tin",
DROP COLUMN "utility",
ADD COLUMN     "status" "public"."VerificationStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "verifiedAt" TIMESTAMP(3),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Verification_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."VerificationDocument" (
    "id" TEXT NOT NULL,
    "verificationId" TEXT NOT NULL,
    "type" "public"."DocumentType" NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "status" "public"."VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "reviewedBy" CHAR(36),
    "reviewNotes" TEXT,
    "rejectionReason" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verifiedAt" TIMESTAMP(3),

    CONSTRAINT "VerificationDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NextOfKin_agentId_key" ON "public"."NextOfKin"("agentId");

-- AddForeignKey
ALTER TABLE "public"."Verification" ADD CONSTRAINT "Verification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VerificationDocument" ADD CONSTRAINT "VerificationDocument_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "public"."Verification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
