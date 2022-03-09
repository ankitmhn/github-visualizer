import React from "react";
import { Anchor, Avatar, Badge, Box, Card, Divider, Title } from "@mantine/core";

interface UserProfileCardProps {
  loading?: boolean;
  imageSrc?: string;
  repositoryCount?: number;
  githubUrl?: string;
  name?: string;
}

export const UserProfileCard: React.VFC<UserProfileCardProps> = ({
  loading = false,
  githubUrl,
  imageSrc,
  repositoryCount,
  name,
}) => {
  return (
    <Card style={{ width: "40%", border: "red" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
          minHeight: "5rem",
        }}
      >
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Anchor href={githubUrl} target="_blank">
            <Title order={1} style={{ fontStyle: "inherit" }}>
              {name}
            </Title>
          </Anchor>
          <div style={{ width: "15vw" }}>
            <Badge color={"violet"} size="md" fullWidth style={{ marginBottom: "5px" }}>
              {repositoryCount || 0} repositories
            </Badge>
            <Anchor href={githubUrl} target="_blank" style={{ cursor: "pointer" }}>
              <Badge color={"violet"} size="md" fullWidth>
                {githubUrl}
              </Badge>
            </Anchor>
          </div>
        </Box>
        <Avatar src={imageSrc} size="xl" />
      </Box>
      <Divider />
    </Card>
  );
};