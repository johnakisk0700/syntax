import { IMovieShort } from "./movies";

export interface Favourites {
  [key: string]: IMovieShort;
}

export interface IFavouritesProvider {
  addOrRemoveFavourite: (movie: IMovieShort) => void;
  checkIfFavouriteExists: (imdbID: string) => boolean;
  favourites: Favourites | null;
}
