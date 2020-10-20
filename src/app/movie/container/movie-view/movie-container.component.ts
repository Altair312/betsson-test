import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieView } from 'src/app/shared/models/search.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetSingleMovie } from 'src/app/actions/search.actions';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.sass'],
})
export class MovieContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ search }>
  ) {}
  id = '';
  movie$: Observable<MovieView> = this.store.select(
    (state) => state.search.currentMovie
  );

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(GetSingleMovie({ payload: this.id }));
  }
}
