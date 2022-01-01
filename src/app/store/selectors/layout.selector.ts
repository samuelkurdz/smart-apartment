import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromLayout from '../reducers/layout.reducer';

/**
 * Layout Reducers
 * selectors
 */

export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  'layout'
);

export const selectShowSidenav = createSelector(
  selectLayoutState,
  fromLayout.getShowSidenav
);
