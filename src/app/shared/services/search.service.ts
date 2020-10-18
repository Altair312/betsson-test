import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from '../models/search.interface';

export interface SearchResponse {
  Response: string;
  Search?: Movie[];
  totalResults?: string;
  Error?: string;
}
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
      map((response: SearchResponse) => {
        if (response.Response === 'True') {
          return {
            Search: response.Search,
            totalResults: response.totalResults,
          };
        } else {
          return { Search: 0 };
        }
      })
    );
  }
}
