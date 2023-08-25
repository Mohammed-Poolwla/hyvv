import Prisma from "../lib/prisma";
import template from "./template_data.json";

template.map(async (item) => {
  const {
    title,
    duration,
    child,
    hyvv_suggested,
    upVoteState,
    downVoteState,
    rating,
  } = item;
  const newTemplate = await Prisma.buildBarTemplate.create({
    data: {
      title: title,
      time: Math.floor(Math.random() * 20 + 1),
      duration: duration,
      upVote: Math.floor(Math.random() * 120 + 1),
      downVote: Math.floor(Math.random() * 10 + 1),
      price: Math.floor(Math.random() * 200 + 50),
      upVoteState: upVoteState,
      downVoteState: downVoteState,
      rating: rating,
      hyvv_suggested: hyvv_suggested,
      subBar: child,
    },
  });
});
