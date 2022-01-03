import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoaderState } from 'src/app/core/interface';

export const selectLoader = createFeatureSelector<LoaderState>('loader');

export const selectLoaderState = createSelector(
  selectLoader,
  (state) => state.isLoading
);