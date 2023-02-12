import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Favourites, IFavouritesProvider } from "../models/favourites";
import { IMovieShort } from "../models/movies";

export const FavouritesContext = createContext<IFavouritesProvider | null>(
  null
);

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export const FavouritesProvider = ({ children }: PropsWithChildren) => {
  const [favourites, setFavourites] = useState<Favourites>({});

  useEffect(() => {
    // read favourites on init
    const savedFavourites = localStorage.getItem("favourites");
    if (savedFavourites) setFavourites(JSON.parse(savedFavourites));
  }, []);

  useEffect(() => {
    // sync localStorage
    if (favourites && Object.entries(favourites).length) {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } else {
      localStorage.removeItem("favourites");
    }
  }, [favourites]);

  const addOrRemoveFavourite = (movie: IMovieShort) => {
    const imdbID = movie.imdbID;
    setFavourites((prev) => {
      if (prev && prev[imdbID]) {
        delete prev[imdbID];
        return { ...prev };
      }
      return { ...prev, [imdbID]: movie };
    });
  };

  const checkIfFavouriteExists = (imdbID: string): boolean => {
    if (favourites && favourites[imdbID]) return true;
    return false;
  };

  const value = useMemo(() => {
    return { addOrRemoveFavourite, checkIfFavouriteExists, favourites };
  }, [favourites]);

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
