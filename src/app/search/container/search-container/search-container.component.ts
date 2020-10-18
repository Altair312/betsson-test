import { Component } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Movie, Search } from 'src/app/shared/models/search.interface';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.sass'],
})
export class SearchContainerComponent {
  movies: Movie[] | string = [];
  error = '';

  constructor(private searchService: SearchService) {}

  handleSearch(inputValue: string): void {
    this.searchService.getMovies(inputValue).subscribe((response: Search) => {
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
