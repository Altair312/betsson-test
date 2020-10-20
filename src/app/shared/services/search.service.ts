import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchRequest, Movie } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private API_URL = 'http://www.omdbapi.com/';
  private API_TOKEN = 'f79aeba3';

  constructor(private http: HttpClient) {}

  getMovies(query: string): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_TOKEN}&s=${query}`;

    return this.http.get(url).pipe(
      map((response: SearchRequest) => {
        if (response.Response === 'True') {
          return {
            Movies: response.Search,
            totalResults: response.totalResults,
            Error: undefined,
          };
        } else if (response.Response === 'False') {
          return {
            Error: response.Error,
            Movies: undefined,
          };
        }
      })
    );
  }
  getSingleMovie(query: string): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_TOKEN}&i=${query}`;

    return this.http.get(url).pipe(
      map((response: Movie) => {
        if (response.Response === 'False') {
          return { Error: response.Error };
        } else {
          return { currentMovie: response };
        }
      })
    );
  }
}
