export interface ServiceResponse {
  Response?: string;
  Error?: string;
}

export interface SearchRequest extends ServiceResponse {
  Search?: Movie[];
  totalResults?: string;
}

export interface Movie extends ServiceResponse {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
  Plot?: string;
  Runtime?: string;
  Genre?: string;
  Ratings?: Rating[];
}

interface Rating {
  Source: string;
  Value: string;
}

export interface SearchState {
  movies: Movie[];
  totalResults?: number;
  currentMovie?: Movie;
  error?: string;
  loading: boolean;
}
