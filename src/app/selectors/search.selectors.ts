import {createSelector, Store} from "@ngrx/store";
import { take } from 'rxjs/operators';
import { SearchState } from '../shared/interfaces';

export const getState = (store: Store<{search: SearchState}>) => {
  let state: SearchState;
  store.select('search').pipe(take(1)).subscribe(
    s => state = s
  )
  return state
}