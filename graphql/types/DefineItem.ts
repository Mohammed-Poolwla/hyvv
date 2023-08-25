import { extendType, nullable, objectType, stringArg } from "nexus";

export const DefineItem = objectType({
  name: "DefineItem",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("time");
    t.string("duration");
  },
});

export const DefineItemsQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("defineItems", {
      type: DefineItem,
      resolve(_parent, _args, ctx): Promise<any> {
        return ctx.prisma.defineItem.findMany();
      },
    });
  },
});

export const DefineItemsByTitleQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("defineItemsByTitle", {
      type: DefineItem,
      args: { title: nullable(stringArg()) },
      resolve(_parent, args: { title: string }, ctx): Promise<any> {
        return ctx.prisma.defineItem.findMany({
          where: {
            title: args.title,
          },
        });
      },
    });
  },
});

export const CreateDefineItemMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createDefineItem", {
      type: DefineItem,
      args: {
        title: nullable(stringArg()),
        time: nullable(stringArg()),
        duration: nullable(stringArg()),
      },
      async resolve(_parent, args, ctx): Promise<any> {
        if (!ctx.user) {
          throw new Error(`You need to be logged in to perform an action`);
        }

        const newDefineItem = {
          title: args.title,
          time: args.time,
          duration: args.duration,
        };

        return await ctx.prisma.defineItem.create({
          data: newDefineItem as any,
        });
      },
    });
  },
});
