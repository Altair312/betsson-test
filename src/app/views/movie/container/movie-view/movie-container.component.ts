import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetSingleMovie } from 'src/app/actions/search.actions';
import { SearchState } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.sass'],
})
export class MovieContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ search: SearchState }>
  ) {}
  id = '';
  loading$: Observable<boolean> = this.store.select((state) => state.search.loading);
  movie$: Observable<Movie> = this.store.select(
    (state) => state.search.currentMovie
  );

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(GetSingleMovie({ payload: this.id }));
}
}
