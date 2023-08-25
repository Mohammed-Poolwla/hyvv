-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'FOUNDER', 'FREELANCER', 'CONTRACTOR', 'ADMIN', 'PROJECT_MANAGER', 'ADVISOR');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('BUILD', 'PLAN', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "isFounder" BOOLEAN NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT,
    "startUpId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartUp" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefineGroup" (
    "id" TEXT NOT NULL,
    "groupTitle" TEXT NOT NULL,
    "startUpId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefineGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DefineItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DefineItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupSection" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "sectionTitle" TEXT NOT NULL,
    "sectionData" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Build" (
    "id" TEXT NOT NULL,
    "startUpId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'OTHER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Build_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildBarTemplate" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subBar" TEXT[],
    "time" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "upVote" INTEGER NOT NULL,
    "downVote" INTEGER NOT NULL,
    "upVoteState" BOOLEAN NOT NULL,
    "downVoteState" BOOLEAN NOT NULL,
    "hyvv_suggested" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BuildBarTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StartUp_companyName_key" ON "StartUp"("companyName");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_startUpId_fkey" FOREIGN KEY ("startUpId") REFERENCES "StartUp"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DefineGroup" ADD CONSTRAINT "DefineGroup_startUpId_fkey" FOREIGN KEY ("startUpId") REFERENCES "StartUp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupSection" ADD CONSTRAINT "GroupSection_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "DefineGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_startUpId_fkey" FOREIGN KEY ("startUpId") REFERENCES "StartUp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
