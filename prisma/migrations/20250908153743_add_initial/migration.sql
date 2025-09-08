-- CreateEnum
CREATE TYPE "public"."VerificationIntentType" AS ENUM ('EMAIL', 'PHONE');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('USER', 'AGENT', 'ADMIN');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "name" TEXT,
    "gender" "public"."Gender" NOT NULL DEFAULT 'Male',
    "dob" DATE,
    "phone" VARCHAR(20),
    "occupation" VARCHAR(30),
    "education" VARCHAR(30),
    "religion" VARCHAR(30),
    "maritalStatus" VARCHAR(20),
    "pin" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "public"."UserRole" NOT NULL DEFAULT 'USER',
    "addressId" CHAR(36),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Agent" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "contactPhone" VARCHAR(20),
    "contactEmail" TEXT NOT NULL,
    "nationality" VARCHAR(100) NOT NULL,
    "nextOfKin" TEXT,
    "businessName" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "verificationId" CHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "streetLine" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "office_address" TEXT,
    "landmark" TEXT,
    "homeAddress" TEXT,
    "lga" TEXT,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Business" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "startedAt" DATE,
    "operationDays" TEXT,
    "operatingHours" TEXT,
    "verificationId" CHAR(36),
    "bankId" CHAR(36),
    "addressId" CHAR(36),

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Verification" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "bvn" INTEGER NOT NULL,
    "IDType" VARCHAR(2048) NOT NULL,
    "cac" TEXT,
    "MEMART" TEXT,
    "authorityLetter" TEXT,
    "tin" TEXT,
    "IDFront" VARCHAR(2048),
    "IDBack" VARCHAR(2048),
    "passport" VARCHAR(2048),
    "utility" VARCHAR(2048),
    "biometric" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Bank" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountNumber" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."IdempotencyKey" (
    "key" TEXT NOT NULL,
    "requestHash" TEXT NOT NULL,
    "responseBody" JSONB,
    "statusCode" INTEGER,
    "lockedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IdempotencyKey_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "public"."VerificationIntent" (
    "id" CHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "userId" CHAR(36) NOT NULL,
    "type" "public"."VerificationIntentType" NOT NULL,
    "refreshCode" VARCHAR(100) NOT NULL,
    "expiresAt" TIMESTAMP(6) NOT NULL DEFAULT NOW() + interval '60 minutes',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationIntent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_userId_key" ON "public"."Agent"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_contactPhone_key" ON "public"."Agent"("contactPhone");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "public"."Verification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Business" ADD CONSTRAINT "Business_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "public"."Bank"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Business" ADD CONSTRAINT "Business_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "public"."Verification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Business" ADD CONSTRAINT "Business_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VerificationIntent" ADD CONSTRAINT "VerificationIntent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
