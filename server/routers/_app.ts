import { procedure, router } from "../trpc";
import { buildRouter } from "./build";
import { buildBarTemplateRouter } from "./buildBarTemplate";
import { defineGroupRouter } from "./defineGroup";
import { employeeRouter } from "./employee";
import { groupSectionRouter } from "./groupSection";
import { startUpRouter } from "./startup";
import { taskDetailRouter } from "./taskDetail";
import { userRouter } from "./user";

import { z } from "zod";

export const appRouter = router({
  healthCheck: procedure.input(z.string()).query(() => "ok"),
  startup: startUpRouter,
  user: userRouter,
  defineGroup: defineGroupRouter,
  groupSection: groupSectionRouter,
  build: buildRouter,
  buildTemplate: buildBarTemplateRouter,
  employee: employeeRouter,
  taskDetail: taskDetailRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
