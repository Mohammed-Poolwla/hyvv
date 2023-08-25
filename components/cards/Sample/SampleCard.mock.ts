import { ISampleCard } from "./SampleCard";

const base: ISampleCard = {
  tag: "cool",
  title: "Cool Cat",
  body: "Here is a cool cat",
  author: "Cat Stevens",
  time: "11:30pm",
};

const alt: ISampleCard = {
  tag: "cool",
  title: "Cool Cat",
  body: "Here is a cool cat",
  author: "Cat Stevens",
  time: "11:30pm",
};

export const mockSampleCardProps = {
  base,
  alt,
};
