import React from "react";
import { Center } from "@mantine/core";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
  const { user } = useParams();
  return <Center style={{ height: "100vh" }}>{user}</Center>;
};
