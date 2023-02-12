import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MoviesResponse } from "../../../models/movies";

type Props = {
  total: string;
};

function MoviesPagination({ total }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Pagination
      sx={{ mt: 3, mx: "auto", width: "max-content" }}
      count={Math.round(parseInt(total) / 10)}
      page={parseInt(searchParams.get("page") || "1")}
      onChange={(e, val) =>
        setSearchParams({
          ...Object.fromEntries(searchParams.entries()),
          page: val.toString(),
        })
      }
    />
  );
}

export default MoviesPagination;
