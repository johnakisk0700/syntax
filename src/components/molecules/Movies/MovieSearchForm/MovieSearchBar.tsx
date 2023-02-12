import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {};

function MovieSearchBar({}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(searchParams.get("s") || "");
  }, [searchParams]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (search) {
      setSearchParams((prev) => {
        return { ...Object.fromEntries(prev.entries()), s: search };
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <FormControl fullWidth>
        <TextField
          label="Search..."
          variant="outlined"
          sx={{ flexGrow: 1 }}
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormControl>
    </Box>
  );
}

export default MovieSearchBar;
