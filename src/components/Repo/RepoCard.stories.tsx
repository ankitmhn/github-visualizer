import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Center } from "@mantine/core";
import { RepoCard } from "./index";
export default {
  title: "Repo Card",
  component: RepoCard,
  decorators: [
    (Story) => (
      <Center style={{ height: "100vh" }}>
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof RepoCard>;

const Template: ComponentStory<typeof RepoCard> = (args) => <RepoCard {...args} />;

export const Default = Template.bind({});
