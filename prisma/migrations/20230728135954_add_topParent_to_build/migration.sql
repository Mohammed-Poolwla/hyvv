/*
  Warnings:

  - Added the required column `topParentId` to the `Build` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "topParentId" TEXT NOT NULL;
