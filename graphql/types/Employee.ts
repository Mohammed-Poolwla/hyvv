import { GraphQLDate } from "graphql-iso-date";
import {
  booleanArg,
  extendType,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";
import { StartUp } from "./StartUp";
import { User } from "./User";
export const DateTime = GraphQLDate;

export const Employee = objectType({
  name: "Employee",
  definition(t) {
    t.string("id");
    t.boolean("isFounder");
    t.string("jobTitle");
    t.field("startDate", { type: "Date" });
    t.boolean("isActive");
    t.nullable.string("startUpId");
    t.nullable.string("userId");
    t.field("user", {
      type: User,
      async resolve(parent, _arg, ctx): Promise<any> {
        return await ctx.prisma.user.findUnique({
          where: {
            id: parent.userId,
          },
        });
      },
    });
    t.field("startUp", {
      type: StartUp,
      async resolve(parent, _arg, ctx) {
        return await ctx.prisma.startUp.findUnique({
          where: {
            id: parent.startUpId,
          },
        });
      },
    });
  },
});

export const CreateEmployeeMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createEmployee", {
      type: Employee,
      args: {
        jobTitle: nonNull(stringArg()),
        userId: nullable(stringArg()),
        startUpId: nullable(stringArg()),
        isActive: nullable(booleanArg()),
        isFounder: nullable(booleanArg()),
      },
      async resolve(_parent, args, ctx) {
        // if (!ctx.user) {
        //   throw new Error(`You need to be logged in to perform an action`);
        // }

        const newEmployee = {
          jobTitle: args.jobTitle,
          userId: args.userId,
          startUpId: args.startUpId,
          isActive: args.isActive,
          isFounder: args.isFounder,
        };

        return await ctx.prisma.employee.create({
          data: newEmployee as any,
        });
      },
    });
  },
});

export const UpdateEmployeeMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("updateEmployee", {
      type: Employee,
      args: {
        id: nonNull(stringArg()),
        jobTitle: nonNull(stringArg()),
        userId: nullable(stringArg()),
        startUpId: nullable(stringArg()),
        isActive: nullable(booleanArg()),
        isFounder: nullable(booleanArg()),
      },
      async resolve(_parent, args, ctx) {
        // if (!ctx.user) {
        //   throw new Error(`You need to be logged in to perform an action`);
        // }
        const newEmployee = {
          jobTitle: args.jobTitle,
          userId: args.userId,
          startUpId: args.startUpId,
          isActive: args.isActive,
          isFounder: args.isFounder,
        };
        return await ctx.prisma.employee.update({
          where: {
            id: args.id,
          },
          data: newEmployee as any,
        });
      },
    });
  },
});

export const DeleteEmployeeMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("deleteEmployee", {
      type: Employee,
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        // if (!ctx.user) {
        //   throw new Error(`You need to be logged in to perform an action`);
        // }
        return await ctx.prisma.employee.delete({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});
