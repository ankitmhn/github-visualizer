import React from "react";
import { Anchor, Avatar, Badge, Box, Card, Loader, Title } from "@mantine/core";

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
    <Card style={{ width: "40%", border: "red" }} shadow="lg" padding="lg">
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-evenly",
          marginBottom: "0.5rem",
          minHeight: "5rem",
        }}
      >
        {loading ? (
          <Loader style={{ alignSelf: "center" }} />
        ) : (
          <>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Anchor href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Title order={1} style={{ fontStyle: "inherit" }}>
                  {name}
                </Title>
              </Anchor>
              <div style={{ width: "15vw" }}>
                <Badge color={"violet"} size="md" fullWidth style={{ marginBottom: "5px" }}>
                  {repositoryCount || 0} repositories
                </Badge>
                <Anchor href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                  <Badge color={"violet"} size="md" fullWidth>
                    {githubUrl}
                  </Badge>
                </Anchor>
              </div>
            </Box>
            <Avatar src={imageSrc} size="xl" />
          </>
        )}
      </Box>
    </Card>
  );
};
