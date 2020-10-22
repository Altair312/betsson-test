import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  MovieActionTypes,
  GetMovies,
  GetSingleMovie,
} from '../actions/search.actions';
import { SearchService } from '../shared/services/search.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}

  private generalError = 'Error connecting to service';

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetMovies),
      mergeMap((action) =>
        this.searchService.getMovies(action.payload).pipe(
          map((movies) => ({
            type: MovieActionTypes.GET_MOVIES_SUCCESS,
            payload: movies,
          })),
          catchError((error) =>
            of({
              type: MovieActionTypes.GET_MOVIES_FAIL,
              payload: this.generalError,
            })
          )
        )
      )
    )
  );
  loadSingleMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetSingleMovie),
      mergeMap((action) =>
        this.searchService.getSingleMovie(action.payload).pipe(
          map((movie) => ({
            type: MovieActionTypes.GET_SINGLE_MOVIE_SUCCESS,
            payload: movie,
          })),
          catchError(() =>
            of({
              type: MovieActionTypes.GET_SINGLE_MOVIE_FAIL,
              payload: this.generalError,
            })
          )
        )
      )
    )
  );
}
