import { ComponentMeta, ComponentStory } from "@storybook/react";
import SampleCard, { ISampleCard } from "./SampleCard";
import { mockSampleCardProps } from "./SampleCard.mock";

export default {
  title: "cards/SampleCard",
  component: SampleCard,
  argTypes: {},
} as ComponentMeta<typeof SampleCard>;

const Template: ComponentStory<typeof SampleCard> = (args) => {
  return <SampleCard {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  ...mockSampleCardProps.base,
  ...mockSampleCardProps.alt,
} as ISampleCard;
