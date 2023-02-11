import { Box } from "@mui/material";
import React from "react";
import MovieSearchBar from "./MovieSearchBar";
import MovieSearchFilters from "./MovieSearchFilters";

type Props = {};

function MovieSearchForm({}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}>
      <MovieSearchBar />
      <MovieSearchFilters />
    </Box>
  );
}

export default MovieSearchForm;
