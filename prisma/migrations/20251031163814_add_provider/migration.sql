-- AlterTable
ALTER TABLE "public"."VerificationIntent" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '60 minutes';

-- CreateTable
CREATE TABLE "public"."Provider" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "provider" TEXT NOT NULL,
    "balance" BIGINT NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "total" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Provider_provider_key" ON "public"."Provider"("provider");
