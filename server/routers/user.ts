import { Prisma } from "@prisma/client";
import { z } from "zod";
import prisma from "../../lib/prisma";
import { procedure, router } from "../trpc";

const defaultUserSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  firstName: true,
  lastName: true,
  email: true,
  role: true,
  employee_ids: true,
});
const RoleValues = ["ADMIN", "USER"] as const;

export const userRouter = router({
  byId: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const user = await prisma.user.findUnique({
        where: { id },
        select: defaultUserSelect,
      });
      return user;
    }),
  byEmail: procedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { email } = input;
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          selectedStartUpId: true,
        },
      });
      return user;
    }),
  create: procedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        role: z.enum(RoleValues),
      })
    )
    .mutation(async ({ input }) => {
      const { firstName, lastName, email, role } = input;
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          role,
        },
        select: defaultUserSelect,
      });
      return user;
    }),
  startupsByUser: procedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const { id } = input;
      const startups = await prisma.startUp.findMany({
        where: { members: { some: { id } } },
        select: { id: true, companyName: true },
      });
      return startups;
    }),
  updateUserByEmail: procedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        originEmail: z.string(),
        newEmail: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { firstName, lastName, originEmail, newEmail } = input;

      const updatedUser = await prisma.user.update({
        where: { email: originEmail },
        data: { firstName, lastName, email: newEmail },
      });

      return updatedUser;
    }),
  deleteUserByEmail: procedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { email } = input;

      const deletedUser = await prisma.user.delete({
        where: { email },
      });

      return deletedUser;
    }),
  setSelectedStartUp: procedure
    .input(
      z.object({
        email: z.string(),
        startupId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { email, startupId } = input;

      const user = await prisma.user.update({
        where: { email },
        data: { selectedStartUpId: startupId },
      });

      return user;
    }),
  getSelectedStartUp: procedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { email } = input;

      const selectedStartUpId = await prisma.user.findFirst({
        where: { email },
        select: { selectedStartUpId: true },
      });

      return selectedStartUpId;
    }),
});
