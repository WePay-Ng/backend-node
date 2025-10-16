-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "embedlyCustomerId" CHAR(36);

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."Wallet" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "userId" CHAR(36) NOT NULL,
    "walletId" TEXT NOT NULL,
    "bankName" CHAR(20) NOT NULL,
    "bankCode" CHAR(3) NOT NULL,
    "accountNumber" CHAR(11) NOT NULL,
    "availableBalance" INTEGER NOT NULL DEFAULT 0,
    "ledgerBalance" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
