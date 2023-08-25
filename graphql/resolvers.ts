export const resolvers = {
  Query: {
    startUps: (_parent, _args, ctx) => {
      return ctx.prisma.startUp.findMany();
    },
    employees: (_parent, _args, ctx) => {
      return ctx.prisma.employee.findMany();
    },
    defineItems: (_parent, _args, ctx) => {
      return ctx.prisma.defineItem.findMany();
    },
  },
};
