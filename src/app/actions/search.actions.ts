import { createAction, props } from '@ngrx/store';
import { Movie } from '../shared/interfaces';

export const enum MovieActionTypes {
  GET_MOVIES = '[Movie] Get Movie List',
  GET_SINGLE_MOVIE = '[Movie] Get Single Movie',
  GET_SINGLE_MOVIE_SUCCESS = '[Movie] Get Single Movie Success',
  GET_MOVIES_SUCCESS = '[Movie] Get Movie List Success',
  GET_SINGLE_MOVIE_FAIL = '[Movie] Get Single Movie Fail',
  GET_MOVIES_FAIL = '[Movie] Get Movie List Fail',
}

export const GetMovies = createAction(
  MovieActionTypes.GET_MOVIES,
  props<{ payload: string }>()
);

export const GetMoviesSuccess = createAction(
  MovieActionTypes.GET_MOVIES_SUCCESS,
  props<{ payload: Movie[] }>()
);

export const GetSingleMovie = createAction(
  MovieActionTypes.GET_SINGLE_MOVIE,
  props<{ payload: string }>()
);

export const GetSingleMovieSuccess = createAction(
  MovieActionTypes.GET_SINGLE_MOVIE_SUCCESS,
  props<{ payload: Movie }>()
);

export const GetMoviesFail = createAction(
  MovieActionTypes.GET_MOVIES_FAIL,
  props<{ payload: string }>()
);
export const GetSingleMovieFail = createAction(
  MovieActionTypes.GET_SINGLE_MOVIE_FAIL,
  props<{ payload: string }>()
);
