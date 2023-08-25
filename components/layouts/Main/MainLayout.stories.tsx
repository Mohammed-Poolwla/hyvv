import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainLayout, { IMainLayout } from "./MainLayout";
import { mockMainLayoutProps } from "./MainLayout.mocks";

export default {
  title: "templates/MainLayout",
  component: MainLayout,
  argTypes: {},
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => {
  return <MainLayout {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  ...mockMainLayoutProps.base,
} as IMainLayout;
