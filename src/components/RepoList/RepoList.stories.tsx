import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Center } from "@mantine/core";
import { RepoList } from "./index";
export default {
  title: "Repo List",
  component: RepoList,
  decorators: [
    (Story) => (
      <Center style={{ height: "100vh" }}>
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof RepoList>;

// TODO: get an array of RepoData to build this
