import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Center } from "@mantine/core";
import { SearchBar } from "./index";
export default {
  title: "Search Bar",
  component: SearchBar,
  decorators: [
    (Story) => (
      <Center style={{ height: "100vh" }}>
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
