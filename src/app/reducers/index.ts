import { createReducer, on } from '@ngrx/store';
import {
  GetMovies,
  GetMoviesSuccess,
  GetSingleMovie,
  GetSingleMovieSuccess,
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
  on(GetMovies, state => ({...state, loading: true})),
  on(GetSingleMovie, state => ({...state, loading: true})),
  on(GetMoviesSuccess, (state, action) => ({ ...state, loading: false,...action.payload })),
  on(GetSingleMovieSuccess, (state, action) => ({
    ...state,
    ...action.payload,
    loading: false,
  }))
);

export const searchReducer = (state, action) => {
  return _searchReducer(state, action);
};
