import { Prisma } from "@prisma/client";
import { z } from "zod";
import prisma from "../../lib/prisma";
import { procedure, router } from "../trpc";

const defaultDefineGroupSelect = Prisma.validator<Prisma.DefineGroupSelect>()({
  id: true,
  groupTitle: true,
});

const defaultGroupSectionSelect = Prisma.validator<Prisma.GroupSectionSelect>()(
  {
    id: true,
    sectionTitle: true,
  }
);

export const defineGroupRouter = router({
  list: procedure.query(async () => {
    const defineGroup = await prisma.defineGroup.findMany();
    return defineGroup;
  }),
  byStartUp: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const defineGroup = await prisma.defineGroup.findMany({
        where: { startUpId: id },
        select: {
          ...defaultDefineGroupSelect,
          sections: {
            select: defaultGroupSectionSelect,
          },
        },
        orderBy: {
          groupTitle: "asc",
        },
      });

      return defineGroup;
    }),
  createMany: procedure
    .input(
      z.object({
        defineGroupList: z.array(
          z.object({
            id: z.string().optional(),
            groupTitle: z.string(),
            startUpId: z.string(),
            child: z.array(
              z.object({
                sectionTitle: z.string(),
                groupId: z.string(),
                sectionData: z.array(z.any()),
              })
            ),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      const { defineGroupList } = input;
      let defineGroupData: {
        id?: string;
        groupTitle: string;
        startUpId: string;
      }[] = [];

      defineGroupList.map((item: any) => {
        const { id, groupTitle, startUpId } = item;
        defineGroupData.push({
          id: id,
          groupTitle: groupTitle ?? "",
          startUpId: startUpId ?? "",
        });
      });
      const selectionData = [];
      defineGroupList.forEach((item) => {
        item.child.forEach((childItem) => {
          selectionData.push(childItem);
        });
      });

      await prisma.defineGroup.createMany({
        data: defineGroupData,
        skipDuplicates: true,
      });

      await prisma.groupSection.createMany({
        data: selectionData,
        skipDuplicates: true,
      });
    }),
  create: procedure
    .input(
      z.object({
        groupTitle: z.string(),
        startUpId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { groupTitle, startUpId } = input;
      const defineGroup = await prisma.defineGroup.create({
        data: {
          groupTitle,
          startUpId,
        },
        select: defaultDefineGroupSelect,
      });
      return defineGroup;
    }),
});
