import { Component } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Movie, Search } from 'src/app/shared/models/search.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getSearchResults } from 'src/app/actions/search.actions';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.sass'],
})
export class SearchContainerComponent {
  movies: Movie[] | string = [];
  count$: Observable<number>;
  error = '';

  constructor(private searchService: SearchService) {
  }

  handleSearch(query: string): void {
    this.searchService.getMovies(query).subscribe((response: Search) => {
      if (response.Error) {
        this.error = response.Error;
        this.movies = [];
      } else {
        this.movies = response.Search.map((movie) => {
          return {
            Title: movie.Title,
            imdbID: movie.imdbID,
            Year: movie.Year,
            Type: movie.Type,
            Poster: movie.Poster,
          };
        });
      }
    });
  }
}
