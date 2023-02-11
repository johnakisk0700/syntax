import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import useFirstRender from "./useFirstRender";

export const useFetch = <T>(
  api: AxiosInstance,
  url: string,
  params: URLSearchParams
) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get<T>(url, {
          params: Object.fromEntries(params),
          signal: abortController.signal,
        });
        setData(data);
        setError(null);
      } catch (e: any) {
        setError(e?.message && e.message);
      } finally {
        setLoading(false);
      }
    })();
    return () => abortController.abort();
  }, [api, params, url]);

  return { data, loading, error };
};
