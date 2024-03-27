-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "password" TEXT;

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
