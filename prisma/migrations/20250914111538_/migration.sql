/*
  Warnings:

  - You are about to drop the column `agentId` on the `Bank` table. All the data in the column will be lost.
  - You are about to drop the column `bankId` on the `Business` table. All the data in the column will be lost.
  - The primary key for the `IdempotencyKey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `key` on the `IdempotencyKey` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(36)`.

*/
-- DropForeignKey
ALTER TABLE "public"."Bank" DROP CONSTRAINT "Bank_agentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Business" DROP CONSTRAINT "Business_bankId_fkey";

-- AlterTable
ALTER TABLE "public"."Bank" DROP COLUMN "agentId",
ADD COLUMN     "businessId" CHAR(36),
ADD COLUMN     "userId" CHAR(36);

-- AlterTable
ALTER TABLE "public"."Business" DROP COLUMN "bankId";

-- AlterTable
ALTER TABLE "public"."IdempotencyKey" DROP CONSTRAINT "IdempotencyKey_pkey",
ALTER COLUMN "key" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "key" SET DATA TYPE CHAR(36),
ADD CONSTRAINT "IdempotencyKey_pkey" PRIMARY KEY ("key");

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AddForeignKey
ALTER TABLE "public"."Bank" ADD CONSTRAINT "Bank_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Bank" ADD CONSTRAINT "Bank_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;
