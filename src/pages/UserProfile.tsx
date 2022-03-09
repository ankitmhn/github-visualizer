import React from "react";
import { Center } from "@mantine/core";
import { Link, useParams } from "react-router-dom";

export const UserProfile = () => {
  const { user } = useParams();
  return (
    <Center style={{ height: "100vh" }}>
      <Link to={"/"} style={{ position: "absolute", top: "2rem", left: "1rem" }}>
        Back
      </Link>
      <div>{user}</div>
    </Center>
  );
};
