import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { IMovie } from "../../models/movies";

type Props = {
  movie: IMovie;
};

function MovieCard({ movie }: Props) {
  return (
    <Card
      sx={{
        display: { md: "flex" },
        justifyContent: "space-between",
        height: "300px",
      }}
    >
      <Box
        flexBasis={"52.5%"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader
          title={movie.Title}
          titleTypographyProps={{ fontSize: "1.125rem" }}
          subheader={movie.Year}
        />
        <Stack direction="row">
          <Typography>{"<3"}</Typography>
          <Button variant="outlined" sx={{ fontSize: "0.75rem" }}>
            MORE
          </Button>
        </Stack>
      </Box>
      <Box flexBasis={"47.5%"} position="relative" overflow="hidden">
        <CardMedia
          component="img"
          height="100%"
          sx={{ objectFit: "cover", position: "absolute" }}
          image={movie.Poster}
          alt={`${movie.Title} poster`}
        />
      </Box>
    </Card>
  );
}

export default MovieCard;
