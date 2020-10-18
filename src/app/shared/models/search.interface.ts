export interface Search {
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

export interface MovieView extends Movie {
  Plot: string;
  Runtime: string;
  Genre: string;
  Ratings: Rating[];
  Response?: string;
  Error?: string;
}

interface Rating {
  Source: string;
  Value: string;
}
