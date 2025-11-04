-- CreateEnum
CREATE TYPE "public"."FeeType" AS ENUM ('INTERNAL', 'DATA', 'EXTERNAL', 'AIRTEL');

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."Fee" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "transactionId" CHAR(36) NOT NULL,
    "provider" CHAR(36),
    "type" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "amount" BIGINT NOT NULL,
    "currency" TEXT NOT NULL,
    "status" "public"."FeeType" NOT NULL DEFAULT 'INTERNAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Fee" ADD CONSTRAINT "Fee_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "public"."Airtime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
