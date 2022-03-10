import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { UserProfileCard } from "../components/UserProfile";
import { useAllReposData, useProfileData } from "../hooks/api-hooks";
import { RepoList } from "../components/RepoList";
import { Pagination } from "@mantine/core";

/**
 * MAGIC NUMBER: 30 is the default number of repos sent by github per page
 * https://docs.github.com/en/rest/reference/repos#list-user-repositories
 * can be updated using the `per_page` parameter in the query
*/
const GH_REPOS_PER_PAGE = 30

export const UserProfile: React.VFC = () => {
  const { user } = useParams();

  const [repoPage, setRepoPage] = useState(1);

  const { data, isLoading } = useProfileData({ username: user || "", enabled: Boolean(user) });
  const { data: repos, isLoading: reposLoading } = useAllReposData({
    username: user || "",
    enabled: Boolean(user),
    page: repoPage,
  });

  const totalPages = useMemo(() => (data?.public_repos ? Math.ceil(data.public_repos / GH_REPOS_PER_PAGE) : 0), [data?.public_repos]);

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
      <RepoList repos={repos} loading={reposLoading} />
      <Pagination page={repoPage} onChange={setRepoPage} total={totalPages} />
    </div>
  );
};
