import { IMovie } from "./movies";

export interface Favourites {
  [key: string]: IMovie;
}

export interface IFavouritesProvider {
  addOrRemoveFavourite: (movie: IMovie) => void;
  checkIfFavouriteExists: (imdbID: string) => boolean;
  favourites: Favourites | null;
}
