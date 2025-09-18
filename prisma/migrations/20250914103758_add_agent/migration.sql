-- DropForeignKey
ALTER TABLE "public"."Agent" DROP CONSTRAINT "Agent_addressId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Agent" DROP CONSTRAINT "Agent_verificationId_fkey";

-- AlterTable
ALTER TABLE "public"."Agent" ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "contactEmail" DROP NOT NULL,
ALTER COLUMN "nationality" DROP NOT NULL,
ALTER COLUMN "licenseNumber" DROP NOT NULL,
ALTER COLUMN "verificationId" DROP NOT NULL,
ALTER COLUMN "addressId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "public"."Verification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
