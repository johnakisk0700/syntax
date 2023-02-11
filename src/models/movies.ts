export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviesResponse {
  Search?: IMovie[];
  Error?: string;
}

export interface MovieSearchOptions {
  s?: string;
  type?: "movie" | "series" | "episode";
  y?: number;
  page?: number;
}
