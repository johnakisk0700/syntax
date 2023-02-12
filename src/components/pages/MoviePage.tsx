import { Box, Chip, Skeleton, Typography } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { dataApi } from "../../http/data-api";
import { Movie, IMovie } from "../../models/movies";
import MovieArticle, { MovieArticleSkeleton } from "../organisms/MovieArticle";

type Props = {};

function MoviePage({}: Props) {
  const { imdbID } = useParams();
  const { data, error, loading } = useFetch<IMovie>(
    dataApi,
    "",
    JSON.stringify({ i: imdbID, plot: "full" })
  );
  const movie = useMemo(() => data && new Movie(data), [data]);
  if (loading) return <MovieArticleSkeleton />;
  if (movie) return <MovieArticle movie={movie} />;
  return <></>;
}

export default MoviePage;
