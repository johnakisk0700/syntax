import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { Movie } from "../../models/movies";
import MovieInfoList from "../molecules/Movies/MovieInfoList";

type Props = {
  movie: Movie;
};

function MovieArticle({ movie }: Props) {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
        mb={2}
      >
        <img
          src={movie.Poster}
          style={{
            maxHeight: "444px",
            minWidth: "300px",
            objectFit: "contain",
          }}
          alt={`${movie.Title} poster`}
        />
        <MovieInfoList movie={movie} />
      </Box>
      <Box mb={2}>
        <Typography fontWeight="bold">Plot: </Typography>
        <Typography>{movie.Plot}</Typography>
      </Box>
      <Box>
        <Typography fontWeight="bold">Awards: </Typography>
        <Typography>{movie.Awards}</Typography>
      </Box>
    </>
  );
}

export const MovieArticleSkeleton = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
        mb={2}
      >
        <Skeleton
          height={444}
          width={300}
          variant="rectangular"
          sx={{ flexShrink: 0, mx: "auto" }}
        />
        <Box width="100%">
          <Skeleton height="3rem" variant="rounded" sx={{ mb: 1 }}></Skeleton>
          {Array(11)
            .fill("")
            .map((el) => (
              <Skeleton height="2rem" width="75%"></Skeleton>
            ))}
        </Box>
      </Box>
      <Box>
        <Skeleton width="8ch"></Skeleton>
        {Array(8)
          .fill("")
          .map(() => (
            <Skeleton />
          ))}
      </Box>
    </>
  );
};

export default MovieArticle;
