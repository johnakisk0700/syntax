import { Grid, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useFavourites } from "../../context/FavouritesProvider";
import { IFavouritesProvider } from "../../models/favourites";
import { IMovieShort } from "../../models/movies";
import MovieCard from "../molecules/Movies/MovieCard";

type Props = {};

function FavouritesPage({}: Props) {
  const { favourites } = useFavourites() as IFavouritesProvider;
  return (
    <>
      <Helmet>
        <title>Favourites</title>
      </Helmet>
      <Typography component="h1" variant="h5" fontWeight="200" mb={1}>
        Favourites
      </Typography>
      <Grid container spacing={3}>
        {favourites &&
          Object.values(favourites).map((movie: IMovieShort) => (
            <Grid item xs={12} md={6}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default FavouritesPage;
