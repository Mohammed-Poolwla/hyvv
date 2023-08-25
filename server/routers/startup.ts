import { Prisma } from "@prisma/client";
import { z } from "zod";
import prisma from "../../lib/prisma";
import { procedure, router } from "../trpc";

const defaultStartupSelect = Prisma.validator<Prisma.StartUpSelect>()({
  id: true,
  companyName: true,
  companyType: true,
});

export const startUpRouter = router({
  list: procedure.query(async () => {
    const startUps = await prisma.startUp.findMany({
      select: defaultStartupSelect,
    });
    return startUps;
  }),
  byUser: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const startUps = await prisma.startUp.findMany({
        where: { members: { some: { id } } },
        select: defaultStartupSelect,
      });
      return startUps;
    }),
  delete: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { id } = input;
      const deletedStartup = await prisma.startUp.delete({
        where: { id },
      });

      return deletedStartup;
    }),
  create: procedure
    .input(
      z.object({
        companyName: z.string(),
        companyType: z.string(),
        members: z.object({ id: z.string() }),
        defineGroups: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { companyName, companyType, members, defineGroups } = input;
      const startUp = await prisma.startUp.create({
        data: {
          companyName,
          companyType,
          members: {
            create: {
              isFounder: true,
              userId: members.id,
              jobTitle: "Founder",
            },
          },
          defineGroups: {
            connect: defineGroups?.map((id) => ({ id })),
          },
        },
        select: defaultStartupSelect,
      });
      return startUp;
    }),
});
