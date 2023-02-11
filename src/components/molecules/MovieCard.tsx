import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { IMovie } from "../../models/movies";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavourites } from "../../context/FavouritesProvider";
import { IFavouritesProvider } from "../../models/favourites";

type Props = {
  movie: IMovie;
};

function MovieCard({ movie }: Props) {
  const { checkIfFavouriteExists, addOrRemoveFavourite } =
    useFavourites() as IFavouritesProvider;
  const isFavourite = checkIfFavouriteExists(movie.imdbID);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        height: { md: "300px" },
      }}
    >
      <Box
        flexBasis={{ md: "52.5%" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 1,
          gap: 3,
          order: { xs: 2, md: 1 },
        }}
      >
        <CardHeader
          title={movie.Title}
          titleTypographyProps={{ fontSize: "1.125rem" }}
          subheader={movie.Year}
          sx={{ p: 0 }}
        />
        <Stack direction="row" gap={1}>
          <Button variant="outlined" sx={{ fontSize: "0.75rem" }}>
            MORE
          </Button>
          <IconButton
            color="error"
            onClick={() => {
              addOrRemoveFavourite(movie);
            }}
          >
            <FavoriteIcon color={isFavourite ? "error" : "disabled"} />
          </IconButton>
        </Stack>
      </Box>
      <Box
        flexBasis={{ md: "47.5%" }}
        sx={{ aspectRatio: "auto" }}
        order={{ xs: 1, md: 2 }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: { xs: "fill", md: "cover" },
            height: "100%",
            objectPosition: "top",
          }}
          image={movie.Poster}
          alt={`${movie.Title} poster`}
        />
      </Box>
    </Card>
  );
}

export default MovieCard;
