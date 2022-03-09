import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { UserProfileCard } from "../components/UserProfile";
import { useAllReposData, useProfileData } from "../hooks/api-hooks";
import { RepoList } from "../components/RepoList";
import { Pagination } from "@mantine/core";

export const UserProfile: React.VFC = () => {
  const { user } = useParams();

  const [repoPage, setRepoPage] = useState(1);

  const { data, isLoading } = useProfileData({ username: user || "", enabled: Boolean(user) });
  const { data: repos, isLoading: reposLoading } = useAllReposData({
    username: user || "",
    enabled: Boolean(user),
    page: repoPage,
  });

  const totalPages = useMemo(() => (data?.public_repos ? Math.ceil(data.public_repos / 30) : 0), [data?.public_repos]);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Link to={"/"} style={{ position: "absolute", top: "2rem", left: "1rem" }}>
        Back
      </Link>
      <UserProfileCard
        githubUrl={data?.html_url}
        imageSrc={data?.avatar_url}
        name={data?.name}
        repositoryCount={data?.public_repos}
        loading={isLoading}
      />
      <Pagination page={repoPage} onChange={setRepoPage} total={totalPages} style={{ marginTop: "1rem" }} />
      <RepoList
        repos={repos}
        onNextPage={() => setRepoPage((current) => current + 1)}
        onPreviousPage={() => setRepoPage((current) => (current > 1 ? current - 1 : current))}
      />
      <Pagination page={repoPage} onChange={setRepoPage} total={totalPages} />
    </div>
  );
};
