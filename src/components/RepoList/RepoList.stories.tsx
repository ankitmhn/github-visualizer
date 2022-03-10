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
  args: {
    repos: [
      {
        html_url: "https://github.com/ankitmhn/ProjectEuler100",
        name: "ProjectEuler100",
        stargazers_count: 0,
        forks_count: 0,
      },
      {
        html_url: "https://github.com/ankitmhn/razzle",
        name: "razzle",
        stargazers_count: 0,
        forks_count: 0,
      },
      {
        html_url: "https://github.com/ankitmhn/react-ssr",
        name: "react-ssr",
        stargazers_count: 0,
        forks_count: 0,
      },
      {
        html_url: "https://github.com/ankitmhn/ReactNativeSeed",
        name: "ReactNativeSeed",
        stargazers_count: 0,
        forks_count: 0,
      },
      {
        html_url: "https://github.com/ankitmhn/redux-demo",
        name: "redux-demo",
        stargazers_count: 0,
        forks_count: 0,
      },
    ],
  },
} as ComponentMeta<typeof RepoList>;

const Template: ComponentStory<typeof RepoList> = (args) => <RepoList {...args} />;

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = { ...Default.args, loading: true };
