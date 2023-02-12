import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import useFirstRender from "./useFirstRender";

export const useFetch = <T>(
  api: AxiosInstance,
  url: string,
  params: string
) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 2000));
        const { data } = await api.get<T>(url, {
          params: JSON.parse(params),
          signal: abortController.signal,
        });
        setData(data);
        setError(null);
        setLoading(false);
      } catch (e: any) {
        if (e?.message === "canceled") return;
        setError(e?.message && e.message);
        setLoading(false);
      }
    })();
    return () => abortController.abort();
  }, [api, params, url]);

  return { data, loading, error };
};
