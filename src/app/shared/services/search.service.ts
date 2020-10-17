import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private API_URL = 'http://www.omdbapi.com/';
  private API_KEY = 'f79aeba3';

  constructor(private http: HttpClient) {}

  getMovies(query: string): Observable<any> {
    const url = `${this.API_URL}?${this.API_KEY}&s=${query}`;

    return this.http.get(url).pipe(map((response: any) => response.items));
  }
}
