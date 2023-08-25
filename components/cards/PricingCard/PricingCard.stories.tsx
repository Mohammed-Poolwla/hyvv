import { ComponentMeta, ComponentStory } from "@storybook/react";
import PricingCard, { IPricingCard } from "./PricingCard";
import { mockPricingCardProps } from "./PricingCard.mock";

export default {
  title: "cards/PricingCard",
  component: PricingCard,
  argTypes: {},
} as ComponentMeta<typeof PricingCard>;

const Template: ComponentStory<typeof PricingCard> = (args) => {
  return <PricingCard {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  ...mockPricingCardProps.base,
} as IPricingCard;
