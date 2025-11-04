/*
  Warnings:

  - The values [AIRTEL] on the enum `FeeType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."FeeType_new" AS ENUM ('INTERNAL', 'DATA', 'EXTERNAL', 'AIRTIME');
ALTER TABLE "public"."Fee" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "public"."Fee" ALTER COLUMN "type" TYPE "public"."FeeType_new" USING ("type"::text::"public"."FeeType_new");
ALTER TYPE "public"."FeeType" RENAME TO "FeeType_old";
ALTER TYPE "public"."FeeType_new" RENAME TO "FeeType";
DROP TYPE "public"."FeeType_old";
ALTER TABLE "public"."Fee" ALTER COLUMN "type" SET DEFAULT 'INTERNAL';
COMMIT;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
