/*
  Warnings:

  - You are about to drop the column `age` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `device` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `interest` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `locType` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `login` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `noTelp` on the `users` table. All the data in the column will be lost.
  - Added the required column `deviceBrand` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `digitalInterest` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeNumber` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationType` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginTime` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personAge` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personEmail` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personGender` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recordDate` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "age",
DROP COLUMN "date",
DROP COLUMN "device",
DROP COLUMN "email",
DROP COLUMN "gender",
DROP COLUMN "interest",
DROP COLUMN "locType",
DROP COLUMN "location",
DROP COLUMN "login",
DROP COLUMN "name",
DROP COLUMN "noTelp",
ADD COLUMN     "deviceBrand" VARCHAR(50) NOT NULL,
ADD COLUMN     "digitalInterest" VARCHAR(100) NOT NULL,
ADD COLUMN     "employeeNumber" INTEGER NOT NULL,
ADD COLUMN     "locationName" VARCHAR(100) NOT NULL,
ADD COLUMN     "locationType" VARCHAR(100) NOT NULL,
ADD COLUMN     "loginTime" VARCHAR(100) NOT NULL,
ADD COLUMN     "personAge" INTEGER NOT NULL,
ADD COLUMN     "personEmail" VARCHAR(100) NOT NULL,
ADD COLUMN     "personGender" VARCHAR(20) NOT NULL,
ADD COLUMN     "personName" VARCHAR(100) NOT NULL,
ADD COLUMN     "phoneNumber" VARCHAR(50) NOT NULL,
ADD COLUMN     "recordDate" TIMESTAMP(3) NOT NULL;
