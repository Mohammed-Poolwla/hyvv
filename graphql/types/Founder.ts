import { objectType } from "nexus";
import { StartUp } from "./StartUp";
import { User } from "./User";

export const Founder = objectType({
  name: "Founder",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.string("startUpId");
    t.nullable.list.field("user", {
      type: User,
      async resolve(parent, _arg, ctx): Promise<any> {
        return await ctx.prisma.user.findMany({
          where: {
            id: parent.userId,
          },
        });
      },
    });
    t.list.field("startUp", {
      type: StartUp,
      async resolve(parent, _arg, ctx) {
        return await ctx.prisma.startUp.findMany({
          where: {
            id: parent.startUpId,
          },
        });
      },
    });
  },
});

// export const CreateUserMutation = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.nonNull.field("createUser", {
//       type: User,
//       args: {
//         firstName: nonNull(stringArg()),
//         lastName: nonNull(stringArg()),
//         email: nonNull(stringArg()),
//         image: nonNull(stringArg()),
//         bio: nullable(stringArg()),
//         role: nullable(Role),
//       },
//       async resolve(_parent, args, ctx) {
//         // if (!ctx.user) {
//         //   throw new Error(`You need to be logged in to perform an action`);
//         // }

//         const newUser = {
//           firstName: args.firstName,
//           lastName: args.lastName,
//           email: args.email,
//           image: args.image,
//           bio: args.bio,
//           role: args.role,
//         };

//         return await ctx.prisma.user.create({
//           data: newUser as any,
//         });
//       },
//     });
//   },
// });
