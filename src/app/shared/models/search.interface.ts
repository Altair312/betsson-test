export interface ServiceResponse {
  Response?: string;
  Error?: string;
}

export interface SearchResponse extends ServiceResponse {
  Search?: Movie[];
  totalResults?: string;
}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieView extends ServiceResponse, Movie {
  Plot: string;
  Runtime: string;
  Genre: string;
  Ratings: Rating[];
}

interface Rating {
  Source: string;
  Value: string;
}
