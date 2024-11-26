/*
  Warnings:

  - You are about to drop the column `registrationNumber` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_registrationNumber_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "registrationNumber";
