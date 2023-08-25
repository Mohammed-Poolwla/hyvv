-- CreateEnum
CREATE TYPE "SubStatus" AS ENUM ('STARTING', 'IN_PROGRESS', 'FOR_REVIEW', 'COMPLETE', 'OTHER');

-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "subStatus" "SubStatus" NOT NULL DEFAULT 'OTHER';
