import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import {
  MovieActionTypes,
  GetMovies,
  GetSingleMovie,
} from '../actions/search.actions';
import { SearchService } from '../shared/services/search.service';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetMovies),
      exhaustMap((action) =>
        this.searchService.getMovies(action.payload).pipe(
          map((movies) => ({
            type: MovieActionTypes.GET_MOVIES_SUCCESS,
            payload: movies,
          }))
        )
      )
    )
  );
  loadSingleMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetSingleMovie),
      exhaustMap((action) =>
        this.searchService.getSingleMovie(action.payload).pipe(
          map((movie) => ({
            type: MovieActionTypes.GET_SINGLE_MOVIE_SUCCESS,
            payload: movie,
          }))
        )
      )
    )
  );
}
