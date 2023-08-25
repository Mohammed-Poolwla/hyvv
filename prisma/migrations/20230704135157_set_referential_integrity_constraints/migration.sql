-- DropForeignKey
ALTER TABLE "Build" DROP CONSTRAINT "Build_startUpId_fkey";

-- DropForeignKey
ALTER TABLE "DefineGroup" DROP CONSTRAINT "DefineGroup_startUpId_fkey";

-- DropForeignKey
ALTER TABLE "GroupSection" DROP CONSTRAINT "GroupSection_groupId_fkey";

-- AddForeignKey
ALTER TABLE "DefineGroup" ADD CONSTRAINT "DefineGroup_startUpId_fkey" FOREIGN KEY ("startUpId") REFERENCES "StartUp"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupSection" ADD CONSTRAINT "GroupSection_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "DefineGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_startUpId_fkey" FOREIGN KEY ("startUpId") REFERENCES "StartUp"("id") ON DELETE CASCADE ON UPDATE CASCADE;
