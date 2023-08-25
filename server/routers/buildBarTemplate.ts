import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { procedure, router } from "../trpc";

const defaultBuildBarTemplateSelect =
  Prisma.validator<Prisma.BuildBarTemplateSelect>()({
    id: true,
    title: true,
    time: true,
    duration: true,
    upVote: true,
    downVote: true,
    upVoteState: true,
    downVoteState: true,
    hyvv_suggested: true,
    rating: true,
    price: true,
    subBar: true,
  });

export const buildBarTemplateRouter = router({
  list: procedure.query(async () => {
    try {
      const buildTemplate = await prisma.buildBarTemplate.findMany({
        select: defaultBuildBarTemplateSelect,
      });
      return { error: null, data: buildTemplate };
    } catch (e) {
      return { error: e, data: null };
    }
  }),
});
