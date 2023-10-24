/*
  Warnings:

  - You are about to drop the column `userId` on the `listing` table. All the data in the column will be lost.
  - Added the required column `userid` to the `listing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "listing" DROP CONSTRAINT "listing_userId_fkey";

-- AlterTable
ALTER TABLE "listing" DROP COLUMN "userId",
ADD COLUMN     "userid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "listing" ADD CONSTRAINT "listing_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
