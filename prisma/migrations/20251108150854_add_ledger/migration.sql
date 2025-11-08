-- DropForeignKey
ALTER TABLE "public"."Fee" DROP CONSTRAINT "Fee_transactionId_fkey";

-- AlterTable
ALTER TABLE "public"."Fee" ADD COLUMN     "ledgerId" CHAR(36);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';
