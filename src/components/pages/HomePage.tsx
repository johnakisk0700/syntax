import { LinearProgress, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecentlyViewed from "../molecules/RecentlyViewed";
import MovieFinder from "../organisms/MovieFinder";

type Props = {};

function HomePage({}: Props) {
  return (
    <>
      <Helmet>
        <title>Film Society Club</title>
      </Helmet>
      <MovieFinder />
    </>
  );
}

export default HomePage;
