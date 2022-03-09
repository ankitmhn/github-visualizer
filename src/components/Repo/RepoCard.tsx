import { Badge, Box, Card, Center, Text } from "@mantine/core";
import React from "react";

interface RepoCardProps {
  htmlUrl?: string;
  repoName?: string;
  stars?: number;
  forks?: number;
}

export const RepoCard: React.VFC<RepoCardProps> = ({ htmlUrl, repoName, stars, forks }) => {
  const openInNewTab = () => {
    window.open(htmlUrl, "_blank", "noopener, noreferrer");
  };
  return (
    <Card
      style={{
        width: "300px",
        cursor: "pointer",
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
      }}
      shadow="xl"
      padding={"sm"}
      onClick={openInNewTab}
    >
      <Text size="xl">{repoName}</Text>
      <Badge fullWidth style={{ width: "15rem" }}>
        {htmlUrl?.split(".com")[1]}
      </Badge>
      <Box>
        <Badge color={"orange"}>{stars} stars</Badge>
        <Badge color={"teal"}>{forks} forks</Badge>
      </Box>
    </Card>
  );
};
