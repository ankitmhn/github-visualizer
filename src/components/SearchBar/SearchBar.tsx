import React, { useState } from "react";
import { Autocomplete, Button, Loader } from "@mantine/core";

interface SearchBarProps {
  loading?: boolean;
  onClickSearch: (name: string) => void;
}
export const SearchBar: React.VFC<SearchBarProps> = ({ loading = false, onClickSearch }) => {
  const [userName, setUsername] = useState("");
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "center" }}
    >
      <Autocomplete
        data={[]}
        size="xl"
        style={{ width: "50%" }}
        label="Look up your next hire's github profile!"
        labelProps={{ style: { marginLeft: "auto", marginRight: "auto" } }}
        placeholder="github username"
        rightSection={loading ? <Loader size={"xs"} /> : null}
        onChange={setUsername}
      />
      <Button style={{ marginTop: "2.5rem", marginLeft: "1rem" }} onClick={() => onClickSearch(userName)}>
        Search!
      </Button>
    </div>
  );
};
