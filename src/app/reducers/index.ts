import { createReducer, on } from '@ngrx/store';
import {
  GetMoviesSuccess,
  GetSingleMovieSuccess,
} from '../actions/search.actions';

export const initialState = {
  Movies: {},
  totalResults: 0,
  currentMovie: {},
};

const _searchReducer = createReducer(
  initialState,
  on(GetMoviesSuccess, (state, action) => ({ ...state, ...action.payload })),
  on(GetSingleMovieSuccess, (state, action) => ({
    ...state,
    ...action.payload,
  }))
);

export const searchReducer = (state, action) => {
  return _searchReducer(state, action);
};
