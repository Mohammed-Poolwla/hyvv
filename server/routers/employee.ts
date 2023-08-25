import { Prisma } from "@prisma/client";
import { z } from "zod";
import prisma from "../../lib/prisma";
import { procedure, router } from "../trpc";

const defaultEmployeeSelect = Prisma.validator<Prisma.EmployeeSelect>()({
  id: true,
  isFounder: true,
  jobTitle: true,
  isActive: true,
  userId: true,
  startUpId: true,
  parent: true,
});

export const employeeRouter = router({
  byId: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const employee = await prisma.employee.findUnique({
        where: { id },
        select: defaultEmployeeSelect,
      });

      return employee;
    }),
  delete: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { id } = input;
      const deletedEmployer = await prisma.employee.delete({
        where: { id },
      });

      return deletedEmployer;
    }),
  list: procedure
    .input(
      z.object({
        userId: z.string().optional(),
        isFounder: z.boolean().optional(),
      })
    )
    .query(async ({ input }) => {
      const startups = await prisma.employee.findMany({
        where: input,
        select: {
          id: true,
          startUp: true,
          isActive: true,
          isFounder: true,
          jobTitle: true,
        },
      });

      return startups;
    }),
  employeesByStartUp: procedure
    .input(
      z.object({
        startUpId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const employees = await prisma.employee.findMany({
        where: input,
        select: {
          id: true,
          isFounder: true,
          jobTitle: true,
          parent: true,
          user: true,
        },
      });

      return employees;
    }),
  addEmployee: procedure
    .input(
      z.object({
        jobTitle: z.string(),
        userId: z.string(),
        startUpId: z.string(),
        parent: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { jobTitle, userId, startUpId, parent } = input;

      const employee = await prisma.employee.create({
        data: {
          isFounder: false,
          jobTitle: jobTitle,
          userId: userId,
          startUpId: startUpId,
          parent: parent,
        },
        select: {
          id: true,
          isFounder: true,
          jobTitle: true,
          startUpId: true,
          parent: true,
          user: true,
        },
      });

      return employee;
    }),
});
