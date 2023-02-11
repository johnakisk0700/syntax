import { Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

type Props = {};

function FavouritesPage({}: Props) {
  return (
    <>
      <Helmet>
        <title>Favourites</title>
      </Helmet>
      <Typography component="h1" variant="h5" fontWeight="200">
        Favourites
      </Typography>
    </>
  );
}

export default FavouritesPage;
