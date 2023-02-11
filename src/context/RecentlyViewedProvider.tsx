import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IMovie } from "../models/movies";

export const RecentlyViewedContext = createContext({});

export const useRecentlyViewed = () => {
  return useContext(RecentlyViewedContext);
};

export const RecentlyViewedProvider = ({ children }: PropsWithChildren) => {
  const [recentlyViewed, setRecentlyViewed] = useState<IMovie[]>([]);

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

  const addToRecentlyViewed = (movie: IMovie) => {
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
      const swapSubArr = newRecentlyViewed.slice(0, indexOfExisting + 1);

      const restOfArr = newRecentlyViewed.slice(
        indexOfExisting + 1,
        newRecentlyViewed.length
      );

      const foundItem = swapSubArr.pop();

      if (foundItem) {
        swapSubArr.unshift(foundItem);
        const reordered = swapSubArr.concat(restOfArr);
        setRecentlyViewed(reordered);
        return;
      }
    }

    // if it doesnt exist, push it to the start
    if (indexOfExisting < 0) {
      setRecentlyViewed((prev) => {
        prev.unshift(movie);
        return [...prev];
      });
    }

    // cleanup 1 or more if something bad happens
    if (newRecentlyViewed.length > 10) {
      setRecentlyViewed((prev) => {
        while (prev.length > 10) {
          prev.pop();
        }
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
