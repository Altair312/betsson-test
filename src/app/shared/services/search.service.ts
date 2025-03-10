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

  /**
   * Submit a GET HTTP request to OMDb API to return results based on search
   * @param  {string} query The query submitted to Omdb
   * @return {object} Returns an object with total search results, array of movies, the query you've submitted and an error, if any.
   */
  getMovies(query: string): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_TOKEN}&s=${query}`;

    return this.http.get(url).pipe(
      map((response: SearchRequest) => {
        if (response.Response === 'True') {
          return {
            movies: response.Search,
            totalResults: parseInt(response.totalResults, 10),
            error: undefined,
            query,
          };
        } else if (response.Response === 'False') {
          return {
            error: response.Error,
            movies: undefined,
            totalResults: 0,
            query,
          };
        }
      })
    );
  }
    /**
   * Submit a GET HTTP request to OMDb API to get selected movie
   * @param  {string} query The query submitted to Omdb
   * @return {object} Returns an object with with the movie you have selected
   */
  getSingleMovie(query: string): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_TOKEN}&i=${query}`;

    return this.http.get(url).pipe(
      map((response: Movie) => {
        if (response.Response === 'False') {
          return { error: response.Error };
        } else {
          return { currentMovie: response };
        }
      })
    );
  }
}
