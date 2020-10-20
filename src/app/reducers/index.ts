import { createReducer, on } from '@ngrx/store';
import {  GetMoviesSuccess} from '../actions/search.actions';


export const initialState = [];

const _searchReducer = createReducer(
  initialState,
  on(GetMoviesSuccess, (_state, action) => ({...action.payload}))
);

export const searchReducer = (state, action) => {
  return _searchReducer(state, action);
}