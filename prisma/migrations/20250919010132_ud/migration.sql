/*
  Warnings:

  - You are about to alter the column `IDType` on the `Verification` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2048)` to `Char(36)`.

*/
-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "bvn" SET DATA TYPE VARCHAR(64);

-- AlterTable
ALTER TABLE "public"."Verification" ALTER COLUMN "IDType" SET DATA TYPE CHAR(36);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
