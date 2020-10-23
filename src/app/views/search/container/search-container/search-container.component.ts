import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetMovies } from 'src/app/actions/search.actions';
import { SearchState } from 'src/app/shared/interfaces';
import { ActivatedRoute } from '@angular/router';
import { getState } from 'src/app/selectors/search.selectors';

@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.sass'],
})
export class SearchContainerComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<{ search: SearchState }>,
    private route: ActivatedRoute
  ) {}

  querySubscription = Subscription.EMPTY;
  query: string;
  storeQuery = getState(this.store).query;

  movies$: Observable<Movie[]> = this.store.select(
    (state) => state.search.movies
  );
  totalResults$: Observable<number> = this.store.select(
    (state) => state.search.totalResults
  );
  error$: Observable<string> = this.store.select((state) => state.search.error);
  loading$: Observable<boolean> = this.store.select(
    (state) => state.search.loading
  );

  ngOnInit(): void {
    this.querySubscription = this.route.params.subscribe((params) => {
      this.query = params.query;
      if (this.query && this.query !== this.storeQuery) {
      this.store.dispatch(GetMovies({ payload: this.query }));
      }
    });
  }
  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
