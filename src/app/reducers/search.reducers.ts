import { createReducer, on } from '@ngrx/store';
import {
  GetMovies,
  GetMoviesSuccess,
  GetSingleMovie,
  GetSingleMovieSuccess,
  GetMoviesFail,
  GetSingleMovieFail,
} from '../actions/search.actions';
import { SearchState } from '../shared/interfaces';

export const initialState: SearchState = {
  movies: [],
  totalResults: 0,
  error: undefined,
  loading: false,
};

// tslint:disable-next-line: variable-name
const _searchReducer = createReducer(
  initialState,
  on(GetMovies, (state) => ({ ...state, loading: true })),
  on(GetSingleMovie, (state) => ({
    ...state,
    currentMovie: null,
    loading: true,
  })),
  on(GetMoviesSuccess, (state, action) => ({
    ...state,
    ...action.payload,
    loading: false,
  })),
  on(GetMoviesFail, (state, action) => ({
    ...state,
    error: action.payload,
    loading: false,
  })),
  on(GetSingleMovieSuccess, (state, action) => ({
    ...state,
    ...action.payload,
    loading: false,
  })),
  on(GetSingleMovieFail, (state, action) => ({
    ...state,
    error: action.payload,
    loading: false,
  }))
);

export const searchReducer = (state, action) => {
  return _searchReducer(state, action);
};
