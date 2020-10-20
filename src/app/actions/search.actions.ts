import { Action, createAction, props} from "@ngrx/store";
import { Movie } from '../shared/models/search.interface';

export const enum MovieActionTypes {
  GET_MOVIES = "[Movie] Get Movie List",
  GET_SINGLE_MOVIE = "[Movie] Get Single Movie",
  GET_MOVIES_SUCCESS = '[Movie] Get Movie List Success'
}

export const GetMovies = createAction(
  MovieActionTypes.GET_MOVIES,
  props<{payload: string}>(),
)

export const GetMoviesSuccess = createAction(MovieActionTypes.GET_MOVIES_SUCCESS, props<{payload: Movie[]}>())