import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetMovies } from 'src/app/actions/search.actions';
import { SearchState } from 'src/app/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.sass'],
})
export class SearchContainerComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select(
    (state) => state.search.movies
  );
  totalResults$: Observable<number> = this.store.select((state) => state.search.totalResults);
  error$: Observable<string> = this.store.select((state) => state.search.error);
  loading$: Observable<boolean> = this.store.select((state) => state.search.loading);
  query = "";

  constructor(private store: Store<{ search: SearchState }>, private route : ActivatedRoute, private router : Router) {}

  handleSearch(query: string): void {
    this.router.navigate([`search/${query}`])
    this.store.dispatch(GetMovies({payload: query}));
  }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query');
    if (this.query) {
      this.store.dispatch(GetMovies({ payload: this.query }));
    }
  }
}
