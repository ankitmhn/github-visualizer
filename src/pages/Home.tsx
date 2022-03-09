import React from "react";
import { Center } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { SearchBar } from "../components/SearchBar";

export const Home: React.VFC = () => {
  const navigate = useNavigate();
  const navigateToProfile = (profile: string) => {
    navigate(`/${profile}`);
  };

  return (
    <Center style={{ height: "100vh" }}>
      <SearchBar onClickSearch={navigateToProfile} />
    </Center>
  );
};
