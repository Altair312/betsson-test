import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/models/search.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetMovies } from 'src/app/actions/search.actions';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.sass'],
})
export class SearchContainerComponent {
  movies: Movie[] | string = [];
  movies$: Observable<Movie[]> = this.store.select(state => state.search.Movies);
  error$: Observable<string> = this.store.select(state => state.search.Error);

  constructor(private store: Store<{search: any}>) {
  }

  handleSearch(query: string): void {
    this.store.dispatch(GetMovies({payload: query}));
  }
}
