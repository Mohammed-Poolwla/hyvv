import { Prisma } from "@prisma/client";
import { z } from "zod";
import prisma from "../../lib/prisma";
import { procedure, router } from "../trpc";

const defaultGroupSectionSelect = Prisma.validator<Prisma.GroupSectionSelect>()(
  {
    id: true,
    sectionTitle: true,
  }
);

export const groupSectionRouter = router({
  create: procedure
    .input(
      z.object({
        sectionTitle: z.string(),
        groupId: z.string(),
        sectionData: z.array(z.any()),
      })
    )
    .mutation(async ({ input }) => {
      const { sectionTitle, groupId, sectionData } = input;
      const groupSection = await prisma.groupSection.create({
        data: {
          sectionTitle,
          groupId,
          sectionData: sectionData,
        },
        select: defaultGroupSectionSelect,
      });
      return groupSection;
    }),
  updateTitle: procedure
    .input(
      z.object({
        id: z.string(),
        sectionTitle: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { sectionTitle, id } = input;
      const groupSection = await prisma.groupSection.update({
        where: { id },
        data: { sectionTitle },
      });
      return groupSection;
    }),
  delete: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { id } = input;
      const delSection = await prisma.groupSection.delete({
        where: { id },
      });
      return delSection;
    }),
  getSectionData: procedure.input(z.string()).mutation(async ({ input }) => {
    const groupSection = await prisma.groupSection.findFirst({
      where: { id: input },
    });
    return groupSection;
  }),
  updateSectionData: procedure
    .input(
      z.object({
        id: z.string(),
        sectionData: z.array(z.any()),
      })
    )
    .mutation(async ({ input }) => {
      const { id, sectionData } = input;
      const groupSection = await prisma.groupSection.update({
        where: { id },
        data: { sectionData },
      });
      return groupSection;
    }),
  getInitSection: procedure.input(z.string()).mutation(async ({ input }) => {
    const groupSection = await prisma.groupSection.findFirst({
      include: { group: true },
      where: { group: { startUpId: input } },
    });
    return groupSection;
  }),
});
