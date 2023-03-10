import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { dataApi } from "../http/data-api";
import { IMovieShort, MoviesResponse } from "../models/movies";

/**
 * This is a seperate file from plain useFetch because it's
 * automatically tied to query params and handles these genius
 * status 200 errors.
 */

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<IMovieShort[] | undefined>(undefined);
  const [data, setData] = useState<MoviesResponse | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      if (!Array.from(searchParams).length) {
        setData(undefined);
        setMovies(undefined);
        setError("");
        setLoading(false);
        return;
      }
      if (!searchParams.get("s")) return;
      try {
        setLoading(true);
        setError("");
        setMovies(undefined);
        setData(undefined);
        const { data } = await dataApi.get<MoviesResponse>("", {
          params: Object.fromEntries(searchParams),
          signal: abortController.signal,
        });
        // if success is error:
        if (data.Error) throw new Error(data.Error);
        setMovies(data.Search);
        setData(data);
        setLoading(false);
      } catch (e: any) {
        if (e?.message === "canceled") return;
        setError(e?.message && e.message);
        setLoading(false);
      }
    })();
    return () => abortController.abort();
  }, [searchParams]);

  return { loading, data, movies, error };
};
