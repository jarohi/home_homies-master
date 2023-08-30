/*
  Warnings:

  - You are about to drop the column `location_type` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `original_url` on the `post` table. All the data in the column will be lost.
  - Added the required column `location_area` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_post` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "post" DROP COLUMN "location_type",
DROP COLUMN "original_url",
ADD COLUMN     "location_area" TEXT NOT NULL,
ADD COLUMN     "original_post" TEXT NOT NULL;
