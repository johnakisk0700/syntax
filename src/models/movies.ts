export interface IMovie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export class Movie {
  Actors;
  Awards;
  BoxOffice;
  Country;
  DVD;
  Director;
  Genre;
  Language;
  Metascore;
  Plot;
  Poster;
  Production;
  Rated;
  Ratings;
  Released;
  Response;
  Runtime;
  Title;
  Type;
  Website;
  Writer;
  Year;
  imdbID;
  imdbRating;
  imdbVotes;
  constructor(movie: IMovie) {
    this.Actors = movie.Actors;
    this.Awards = movie.Awards;
    this.BoxOffice = movie.BoxOffice;
    this.Country = movie.Country;
    this.DVD = movie.DVD;
    this.Director = movie.Director;
    this.Genre = movie.Genre.split(",").map((el) => el.trim());
    this.Language = movie.Language;
    this.Metascore = movie.Metascore;
    this.Plot = movie.Plot;
    this.Poster = movie.Poster;
    this.Production = movie.Production;
    this.Rated = movie.Rated;
    this.Ratings = movie.Ratings;
    this.Released = movie.Released;
    this.Response = movie.Response;
    this.Runtime = movie.Runtime;
    this.Title = movie.Title;
    this.Type = movie.Type;
    this.Website = movie.Website;
    this.Writer = movie.Writer;
    this.Year = movie.Year;
    this.imdbID = movie.imdbID;
    this.imdbRating = movie.imdbRating;
    this.imdbVotes = movie.imdbVotes;
  }
}

export interface IMovieShort {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviesResponse {
  Search?: IMovieShort[];
  Error?: string;
}

export interface MovieSearchOptions {
  s?: string;
  type?: "movie" | "series" | "episode";
  y?: number;
  page?: number;
}
