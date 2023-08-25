import {
  enumType,
  extendType,
  list,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";
import { Employee } from "./Employee";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("firstName");
    t.string("lastName");
    t.string("email");
    t.list.field("role", { type: Role });
    t.list.field("employee_ids", {
      type: Employee,
      async resolve(parent, _arg, ctx) {
        return await ctx.prisma.employee.findMany({
          where: {
            id: parent.id,
          },
        });
      },
    });
  },
});

const Role = enumType({
  name: "Role",
  members: [
    "USER",
    "FOUNDER",
    "CONTRACTOR",
    "ADMIN",
    "PROJECT_MANAGER",
    "ADVISOR",
  ],
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("users", {
      type: User,
      resolve(_parent, _args, ctx): Promise<any> {
        return ctx.prisma.user.findMany();
      },
    });
  },
});

export const CreateUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createUser", {
      type: User,
      args: {
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        email: nonNull(stringArg()),
        role: list(nullable(Role)),
      },
      async resolve(_parent, args, ctx): Promise<any> {
        // if (!ctx.user) {
        //   throw new Error(`You need to be logged in to perform an action`);
        // }

        const newUser = {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          role: args.role,
        };

        return await ctx.prisma.user.create({
          data: newUser as any,
        });
      },
    });
  },
});
