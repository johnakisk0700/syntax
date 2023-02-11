import {
  Alert,
  Grid,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import { useFetchMovies } from "../../../hooks/useFetchMovies";
import { IMovie } from "../../../models/movies";
import MovieCard from "../../molecules/MovieCard";
import MovieSearchForm from "../../molecules/MovieSearchForm/MovieSearchForm";

type Props = {};

function MovieFinder({}: Props) {
  const { loading, data, error } = useFetchMovies();
  const notSearchedYet = !loading && !data && !error;
  return (
    <>
      <MovieSearchForm />
      {notSearchedYet ? (
        <Typography component="h2" variant="body1" textAlign="center">
          What are we searching for today?
        </Typography>
      ) : null}
      {error ? <Alert severity="error">{error}</Alert> : null}
      <Grid container spacing={3}>
        {data &&
          data.map((movie: IMovie) => (
            <Grid item xs={12} md={6}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        {!data && loading
          ? Array(10)
              .fill(0)
              .map(() => (
                <Grid item xs={12} md={6}>
                  <Skeleton variant="rounded" height="300px" width="100%" />
                </Grid>
              ))
          : null}
      </Grid>
    </>
  );
}

export default MovieFinder;
