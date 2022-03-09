import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Center } from "@mantine/core";
import { UserProfileCard } from "./UserProfileCard";

export default {
  title: "User Profile",
  component: UserProfileCard,
  decorators: [
    (Story) => (
      <Center style={{ height: "100vh" }}>
        <Story />
      </Center>
    ),
  ],
  args: {
    githubUrl: "https://www.github.com/ankitmhn",
    imageSrc: "https://avatars.githubusercontent.com/u/16084067?v=4",
    loading: false,
    name: "Ankit Mohan",
    repositoryCount: 50,
  },
} as ComponentMeta<typeof UserProfileCard>;

const Template: ComponentStory<typeof UserProfileCard> = (args) => <UserProfileCard {...args} />;

export const Default = Template.bind({});
