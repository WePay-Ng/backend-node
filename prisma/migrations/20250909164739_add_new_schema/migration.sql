/*
  Warnings:

  - You are about to drop the column `address` on the `Agent` table. All the data in the column will be lost.
  - Added the required column `addressId` to the `Agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Agent" DROP COLUMN "address",
ADD COLUMN     "addressId" CHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Business" ADD COLUMN     "internetAccess" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "terminals" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "userBase" TEXT NOT NULL DEFAULT '1-50';

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
