import { createAction, props } from '@ngrx/store';
import { Movie } from '../shared/interfaces';

export const enum MovieActionTypes {
  GET_MOVIES = '[Movie] Get Movie List',
  GET_SINGLE_MOVIE = '[Movie] Get Single Movie',
  GET_SINGLE_MOVIE_SUCCESS = '[Movie] Get Single Movie Success',
  GET_MOVIES_SUCCESS = '[Movie] Get Movie List Success',
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
