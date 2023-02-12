import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IMovieShort } from "../models/movies";

export const RecentlyViewedContext = createContext({});

export const useRecentlyViewed = () => {
  return useContext(RecentlyViewedContext);
};

export const RecentlyViewedProvider = ({ children }: PropsWithChildren) => {
  const [recentlyViewed, setRecentlyViewed] = useState<IMovieShort[]>([]);

  useEffect(() => {
    // read on init
    const savedRecentlyViewed = localStorage.getItem("recentlyViewed");
    if (savedRecentlyViewed && savedRecentlyViewed.length)
      setRecentlyViewed(JSON.parse(savedRecentlyViewed));
  }, []);

  useEffect(() => {
    // sync with localStorage
    if (recentlyViewed.length)
      localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = (movie: IMovieShort) => {
    // if it's the first don't even bother doing anything else
    if (!recentlyViewed.length) {
      setRecentlyViewed([movie]);
      return;
    }

    const newRecentlyViewed = [...recentlyViewed];

    const indexOfExisting = recentlyViewed.findIndex(
      (el) => el.imdbID === movie.imdbID
    );

    // if it exists we will perform some tricks to reorder the array
    if (indexOfExisting >= 0) {
      let foundItem = newRecentlyViewed.splice(indexOfExisting, 1);
      newRecentlyViewed.unshift(foundItem[0]);
      setRecentlyViewed(newRecentlyViewed);
      return;
    }

    // if it doesnt exist, push it to the start
    // and erase the last if we exceed 10
    if (indexOfExisting < 0) {
      setRecentlyViewed((prev) => {
        prev.unshift(movie);
        if (prev.length > 10) prev.pop();
        return [...prev];
      });
    }
  };

  const value = useMemo(() => {
    return { recentlyViewed, addToRecentlyViewed };
  }, [recentlyViewed]);

  return (
    <RecentlyViewedContext.Provider value={value}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};
