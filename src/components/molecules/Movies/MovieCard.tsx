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
import { IMovieShort } from "../../../models/movies";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavourites } from "../../../context/FavouritesProvider";
import { IFavouritesProvider } from "../../../models/favourites";
import { useRecentlyViewed } from "../../../context/RecentlyViewedProvider";
import { useNavigate } from "react-router-dom";

type Props = {
  movie: IMovieShort;
};

function MovieCard({ movie }: Props) {
  const navigate = useNavigate();
  const { addToRecentlyViewed } = useRecentlyViewed() as {
    addToRecentlyViewed: (movie: IMovieShort) => void;
  };

  const handleMoreClick = () => {
    addToRecentlyViewed(movie);
    navigate(`/movie/${movie.imdbID}`);
  };

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
          <Button
            variant="outlined"
            sx={{ fontSize: "0.75rem" }}
            onClick={handleMoreClick}
          >
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
