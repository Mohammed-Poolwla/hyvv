import { extendType, nonNull, nullable, objectType, stringArg } from "nexus";
import { Employee } from "./Employee";

export const StartUp = objectType({
  name: "StartUp",
  definition(t) {
    t.string("id");
    t.string("companyName");
    t.string("companyType");
    t.nullable.list.field("members", {
      type: Employee,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.employee.findMany({
          where: {
            startUpId: parent.id,
          },
        });
      },
    });
  },
});

export const StartUpsQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("startups", {
      type: StartUp,
      resolve(_parent, _args, ctx): Promise<any> {
        return ctx.prisma.startUp.findMany();
      },
    });
  },
});

export const StartUpsByUserQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("startupsByUser", {
      type: StartUp,
      args: { userEmail: nullable(stringArg()) },
      resolve(_parent, args: { userEmail: string }, ctx): Promise<any> {
        return ctx.prisma.startUp.findMany({
          where: {
            members: {
              some: {
                user: {
                  email: args.userEmail,
                },
              },
            },
          },
        });
      },
    });
  },
});

export const CreateStartUpMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createStartUp", {
      type: StartUp,
      args: {
        companyName: nonNull(stringArg()),
        companyType: nullable(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const { id } = await ctx.prisma.user.findUnique({
          where: { email: ctx.user.email },
        });

        if (!ctx.user) {
          throw new Error(`You need to be logged in to perform an action`);
        }

        // Create Startup Record
        const startup = await ctx.prisma.startUp.create({
          data: {
            companyName: args.companyName,
            companyType: args.companyType,
          },
        });

        // Create Employee Record
        const employee = await ctx.prisma.employee.create({
          data: {
            userId: id,
            startUpId: startup.id,
            jobTitle: "Founder/CEO",
            isFounder: true,
          },
        });

        await ctx.prisma.user.update({
          where: {
            id,
          },
          data: { employee_ids: { connect: { id: employee.id } } },
        });

        // Update StartUp record to link employee
        return await ctx.prisma.startUp.update({
          where: {
            id: startup.id,
          },
          data: { members: { connect: { id: employee.id } } },
        });
      },
    });
  },
});
