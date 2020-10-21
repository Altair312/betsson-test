import { createReducer, on } from '@ngrx/store';
import {
  GetMoviesSuccess,
  GetSingleMovieSuccess,
} from '../actions/search.actions';
import { SearchState } from '../shared/interfaces';

export const initialState: SearchState = {
  movies: [],
  totalResults: 0,
  currentMovie: {
    Title: '',
    Year: 0,
    imdbID: '',
    Type: '',
    Poster: '',
  },
  error: undefined,
};

// tslint:disable-next-line: variable-name
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
