import {
  Alert,
  Grid,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { IMovieShort } from "../../models/movies";
import MovieCard from "../molecules/Movies/MovieCard";
import MovieSearchForm from "../molecules/Movies/MovieSearchForm/MovieSearchForm";

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
      {error && !loading ? <Alert severity="error">{error}</Alert> : null}
      <Grid container spacing={3}>
        {data && !loading
          ? data.map((movie: IMovieShort) => (
              <Grid item xs={12} md={6}>
                <MovieCard movie={movie} />
              </Grid>
            ))
          : null}
        {loading
          ? Array(10)
              .fill(0)
              .map(() => (
                <Grid item xs={12} md={6}>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    sx={{ height: { xs: "700px", sm: "300px" } }}
                  />
                </Grid>
              ))
          : null}
      </Grid>
    </>
  );
}

export default MovieFinder;
