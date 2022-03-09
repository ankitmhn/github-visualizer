import React from "react";
import { RepoData } from "../../hooks/api-hooks";
import { RepoCard } from "../Repo/RepoCard";

interface RepoListProps {
  repos?: Array<RepoData>;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export const RepoList: React.VFC<RepoListProps> = ({ repos, onNextPage, onPreviousPage }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", padding: "1.5rem" }}
    >
      {repos?.map((repo) => (
        <RepoCard
          repoName={repo.name}
          forks={repo.forks_count}
          htmlUrl={repo.html_url}
          stars={repo.stargazers_count}
          key={repo.html_url}
        />
      ))}
    </div>
  );
};
