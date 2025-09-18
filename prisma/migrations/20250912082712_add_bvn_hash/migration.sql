/*
  Warnings:

  - You are about to drop the column `bvn` on the `Verification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "bvn" VARCHAR(60);

-- AlterTable
ALTER TABLE "public"."Verification" DROP COLUMN "bvn";

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
