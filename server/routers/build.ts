import { Prisma } from "@prisma/client";
import { z } from "zod";
import prisma from "../../lib/prisma";
import { procedure, router } from "../trpc";

const defaultBuildSelect = Prisma.validator<Prisma.BuildSelect>()({
  id: true,
  title: true,
  parentId: true,
  topParentId: true,
  status: true,
  tasks: true,
  icon: true,
  checked: true,
});

const StatusValues = [
  "BUILD",
  "PLAN",
  "OTHER",
  "OFFER",
  "STAGED",
  "STARTING",
  "IN_PROGRESS",
  "FOR_REVIEW",
  "COMPLETE",
] as const;

export const buildRouter = router({
  list: procedure
    .input(
      z.object({
        startUpId: z.string(),
      })
    )
    .query(async ({ input }) => {
      try {
        const parent = await prisma.build.findMany({
          where: input,
          orderBy: {
            createdAt: "asc",
          },
          select: defaultBuildSelect,
        });

        return { error: null, data: [...parent] };
      } catch (e) {
        return { error: e, data: null };
      }
    }),
  listByStatus: procedure
    .input(
      z.object({
        startUpId: z.string(),
        status: z.array(z.enum(StatusValues)),
      })
    )
    .query(async ({ input }) => {
      try {
        const { startUpId, status } = input;
        const parent = await prisma.build.findMany({
          where: {
            startUpId: startUpId,
            status: {
              in: status,
            },
          },
          orderBy: {
            createdAt: "asc",
          },
          select: defaultBuildSelect,
        });

        const children = await prisma.build.findMany({
          where: {
            topParentId: {
              in: parent.map((item) => item.id),
            },
          },
          orderBy: {
            createdAt: "asc",
          },
          select: defaultBuildSelect,
        });
        return { error: null, data: [...parent, ...children] };
      } catch (e) {
        return { error: e, data: null };
      }
    }),
  listByTopParentId: procedure.input(z.string()).query(async ({ input }) => {
    try {
      const parent = await prisma.build.findMany({
        where: {
          id: input,
        },
        orderBy: {
          createdAt: "asc",
        },
        select: defaultBuildSelect,
      });

      const children = await prisma.build.findMany({
        where: {
          topParentId: input,
        },
        orderBy: {
          createdAt: "asc",
        },
        select: defaultBuildSelect,
      });

      return { error: null, data: [...parent, ...children] };
    } catch (e) {
      return { error: e, data: null };
    }
  }),
  create: procedure
    .input(
      z.object({
        id: z.string().optional(),
        startUpId: z.string(),
        title: z.string(),
        parentId: z.string().optional().default(""),
        topParentId: z.string().optional().default(""),
        status: z.enum(StatusValues).optional().default("OTHER"),
        icon: z.string().optional().default(""),
        checked: z.boolean().optional().default(false),
      })
    )
    .mutation(async ({ input }) => {
      const {
        id,
        startUpId,
        title,
        parentId,
        topParentId,
        status,
        icon,
        checked,
      } = input;
      const newBuild = await prisma.build.create({
        data: {
          id,
          startUpId,
          title,
          parentId,
          status,
          topParentId,
          icon,
          checked,
        },
        select: {
          id: true,
        },
      });

      return newBuild;
    }),
  createMany: procedure
    .input(
      z.object({
        buildList: z.array(
          z.object({
            id: z.string().optional(),
            startUpId: z.string(),
            title: z.string(),
            parentId: z.string().optional().default(""),
            topParentId: z.string().optional().default(""),
            status: z.enum(StatusValues).optional().default("OTHER"),
            icon: z.string().optional().default(""),
            checked: z.boolean().optional().default(false),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      const { buildList } = input;
      let buildData: {
        id?: string;
        startUpId: string;
        title: string;
        parentId: string;
        topParentId: string;
        status?: any;
        icon?: string;
        checked: boolean;
      }[] = [];

      buildList.map((item: any) => {
        const {
          id,
          startUpId,
          title,
          parentId,
          topParentId,
          status,
          icon,
          checked,
        } = item;
        buildData.push({
          id: id,
          startUpId: startUpId ?? "",
          title: title ?? "",
          parentId: parentId ?? "",
          topParentId: topParentId ?? "",
          status: status,
          icon: icon,
          checked: checked ?? false,
        });
      });
      await prisma.build.createMany({
        data: buildData,
        skipDuplicates: true,
      });
    }),
  delete: procedure
    .input(
      z.object({
        id_list: z.string().array(),
      })
    )
    .mutation(async ({ input }) => {
      const { id_list } = input;
      const removeItem = await prisma.build.deleteMany({
        where: {
          id: {
            in: id_list,
          },
        },
      });

      return removeItem;
    }),
  update: procedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        parentId: z.string().optional(),
        topParentId: z.string().optional(),
        status: z.enum(StatusValues).optional(),
        checked: z.boolean().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, title, parentId, topParentId, status, checked } = input;
      const updatedBuild = await prisma.build.update({
        where: { id },
        data: { title, parentId, topParentId, status, checked },
      });
      return updatedBuild;
    }),
  updateMany: procedure
    .input(
      z.object({
        idList: z.array(z.string()),
        title: z.string().optional(),
        parentId: z.string().optional(),
        topParentId: z.string().optional(),
        status: z.enum(StatusValues).optional(),
        checked: z.boolean().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { idList, title, parentId, topParentId, status, checked } = input;
      await prisma.build.updateMany({
        where: {
          NOT: { id: { in: idList }, AND: { topParentId: topParentId } },
        },
        data: { title, parentId, status, checked: !checked },
      });
      const updatedBuild = await prisma.build.updateMany({
        where: { id: { in: idList }, topParentId: topParentId },
        data: { title, parentId, status, checked },
      });

      return updatedBuild;
    }),
});
