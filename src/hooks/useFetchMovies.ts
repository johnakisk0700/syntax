import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { dataApi } from "../http/data-api";
import { IMovie, MoviesResponse } from "../models/movies";

export const useFetchMovies = () => {
  const [data, setData] = useState<IMovie[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      if (!searchParams.get("s")) return;
      try {
        setLoading(true);
        setData(undefined);
        await new Promise((r) => setTimeout(r, 2000));
        const { data } = await dataApi.get<MoviesResponse>("", {
          params: Object.fromEntries(searchParams),
          signal: abortController.signal,
        });
        if (data.Error) throw new Error(data.Error);
        setData(data.Search);
        setError("");
      } catch (e: any) {
        setError(e?.message && e.message);
      } finally {
        setLoading(false);
      }
    })();
    return () => abortController.abort();
  }, [searchParams]);

  return { loading, data, error };
};
