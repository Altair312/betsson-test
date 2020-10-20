import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/search.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetMovies } from 'src/app/actions/search.actions';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.sass'],
})
export class SearchContainerComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select(
    (state) => state.search.Movies
  );
  error$: Observable<string> = this.store.select((state) => state.search.Error);
  searchParams = new URLSearchParams(window.location.search).get('search');

  constructor(private store: Store<{ search: any }>) {}

  handleSearch(query: string): void {
    window.history.replaceState(
      '',
      `Search in IMDB for ${query}`,
      `?search=${query}`
    );
    this.store.dispatch(GetMovies({ payload: query }));
  }

  ngOnInit(): void {
    if (this.searchParams) {
      this.store.dispatch(GetMovies({ payload: this.searchParams }));
    }
  }
}
