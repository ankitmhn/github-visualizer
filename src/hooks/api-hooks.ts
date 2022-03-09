import { useQuery } from "react-query";

interface ProfileResponse {
  name?: string;
  public_repos?: number;
  avatar_url?: string;
  html_url?: string;
}

interface QueryInput {
  username: string;
  enabled: boolean;
}

export const useProfileData = ({ username, enabled }: QueryInput) =>
  useQuery<ProfileResponse>(
    ["profile", username],
    async () => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      return res.json();
    },
    { enabled }
  );

interface RepoData {
  html_url?: string;
  name: string;
  stargazers_count: number;
  forks_count: number;
}

interface RepoQueryInput {
  page: number;
}

export const useAllReposData = ({ username, enabled, page }: QueryInput & RepoQueryInput) =>
  useQuery<RepoData[]>(
    ["repos", username, [page]],
    async () => {
      const res = await fetch(`https://api.github.com/users/${username}/repos?page=${page}`);
      return res.json();
    },
    { enabled, keepPreviousData: true }
  );
