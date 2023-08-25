import { Prisma } from "@prisma/client";
import { z } from "zod";
import prisma from "../../lib/prisma";
import { procedure, router } from "../trpc";

const defaultDetailSelect = Prisma.validator<Prisma.TaskDetailSelect>()({
  taskId: true,
  description: true,
  budget: true,
  createDate: true,
  endDate: true,
  comment: true,
  freelancer: true,
});

export const taskDetailRouter = router({
  listByTask: procedure
    .input(
      z.object({
        taskId: z.string(),
      })
    )
    .query(async ({ input }) => {
      try {
        const res = await prisma.taskDetail.findFirst({
          where: input,
          select: defaultDetailSelect,
        });

        return { error: null, data: res };
      } catch (e) {
        return { error: e, data: null };
      }
    }),
  create: procedure
    .input(
      z.object({
        taskId: z.string(),
        description: z.string(),
        budget: z.number(),
        createDate: z.date(),
        endDate: z.date(),
        comment: z.array(
          z.object({
            author: z.string(),
            date: z.string(),
            read: z.boolean(),
            content: z.string(),
          })
        ),
        freelancer: z.array(z.string()),
      })
    )
    .mutation(async ({ input }) => {
      const {
        taskId,
        description,
        budget,
        createDate,
        endDate,
        comment,
        freelancer,
      } = input;
      const newDetail = await prisma.taskDetail.create({
        data: {
          taskId,
          description,
          budget,
          createDate,
          endDate,
          comment,
          freelancer,
        },
        select: {
          id: true,
        },
      });

      return newDetail;
    }),
});
