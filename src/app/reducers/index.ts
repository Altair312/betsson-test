import { createReducer, on } from '@ngrx/store';
import { getSearchResults } from '../actions/search.actions';


export const initialState = [];

const _searchReducer = createReducer(
  initialState,
  on(getSearchResults, (state) => state)
);

export const searchReducer = (state, action) => {
  return _searchReducer(state, action);
}