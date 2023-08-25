/*
  Warnings:

  - You are about to drop the column `subStatus` on the `Build` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Status" ADD VALUE 'STARTING';
ALTER TYPE "Status" ADD VALUE 'IN_PROGRESS';
ALTER TYPE "Status" ADD VALUE 'FOR_REVIEW';
ALTER TYPE "Status" ADD VALUE 'COMPLETE';

-- AlterTable
ALTER TABLE "Build" DROP COLUMN "subStatus";

-- DropEnum
DROP TYPE "SubStatus";
