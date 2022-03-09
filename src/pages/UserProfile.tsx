import React, { useEffect, useState } from "react";
import { Center } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { UserProfileCard } from "../components/UserProfile";
import { useAllReposData, useProfileData } from "../hooks/api-hooks";

export const UserProfile: React.VFC = () => {
  const { user } = useParams();

  const [repoPage, setRepoPage] = useState(2);

  const { data, isLoading } = useProfileData({ username: user || "", enabled: Boolean(user) });
  const {
    data: repos,
    isLoading: reposLoading,
    refetch,
  } = useAllReposData({ username: user || "", enabled: Boolean(user), page: repoPage });

  useEffect(() => {
    console.log({ repos, reposLoading });
  }, [repos, reposLoading]);

  return (
    <Center style={{ height: "100vh" }}>
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
    </Center>
  );
};
