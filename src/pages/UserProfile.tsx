import React, { useEffect } from "react";
import { Center } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { UserProfileCard } from "../components/UserProfile";

interface ProfileResponse {
  name?: string;
  public_repos?: number;
  avatar_url?: string;
  html_url?: string;
}

export const UserProfile: React.VFC = () => {
  const { user } = useParams();
  const { data, isLoading, error } = useQuery<ProfileResponse>("profile", async () => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    return res.json();
  });

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
      />
    </Center>
  );
};
