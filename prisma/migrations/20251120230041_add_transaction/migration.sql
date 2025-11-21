-- CreateEnum
CREATE TYPE "public"."TransactionType" AS ENUM ('AIRTIME', 'DATA', 'TRANSFER', 'DEPOSIT', 'FEE');

-- AlterEnum
ALTER TYPE "public"."TransferStatus" ADD VALUE 'REVERSED';

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."transaction" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "userId" CHAR(36) NOT NULL,
    "itemId" CHAR(36) NOT NULL,
    "type" "public"."TransactionType" NOT NULL DEFAULT 'TRANSFER',
    "status" "public"."TransferStatus" NOT NULL DEFAULT 'PENDING',
    "amount" BIGINT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."transaction" ADD CONSTRAINT "transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
