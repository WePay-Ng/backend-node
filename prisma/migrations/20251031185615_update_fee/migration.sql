/*
  Warnings:

  - The `type` column on the `Fee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `status` on the `Fee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Fee" DROP COLUMN "type",
ADD COLUMN     "type" "public"."FeeType" NOT NULL DEFAULT 'INTERNAL',
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
