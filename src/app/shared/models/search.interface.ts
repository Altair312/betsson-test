export interface SearchResponse {
  Response: string;
  Search?: Movie[];
  totalResults?: string;
  Error?: string;
}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}
