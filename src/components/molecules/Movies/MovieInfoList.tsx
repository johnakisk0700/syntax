import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { Movie } from "../../../models/movies";

type Props = {
  movie: Movie;
};

function MovieInfoList({ movie }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography component="h1" variant="h4" mb={1}>
        {movie.Title}
      </Typography>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">IMDb Rating: </Typography>
        <Typography lineHeight="1rem">
          {movie.imdbRating}/10<span style={{ fontSize: "1.2rem" }}> ⭐</span>
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Release: </Typography>
        <Typography>{movie.Released}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Runtime: </Typography>
        <Typography>{movie.Runtime}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Language: </Typography>
        <Typography>{movie.Language}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Rated: </Typography>
        <Typography>{movie.Rated}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Director: </Typography>
        <Typography>{movie.Director}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Writer: </Typography>
        <Typography>{movie.Writer}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Genre: </Typography>
        {movie.Genre.map((el) => (
          <Chip key={el} label={el} variant="outlined" size="small" />
        ))}
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Box Office: </Typography>
        <Typography>{movie.BoxOffice}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Actors: </Typography>
        <Typography>{movie.Actors}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Ratings: </Typography>
        {movie.Ratings.map((el, i) => (
          <Chip
            key={i}
            label={
              <>
                <Typography fontWeight="bold" fontSize="small">
                  {el.Source}:
                  <Typography component="span" fontSize="small">
                    {" "}
                    {el.Value}
                  </Typography>
                </Typography>{" "}
              </>
            }
            variant="outlined"
            size="small"
          />
        ))}
      </Box>
    </Box>
  );
}

export default MovieInfoList;
