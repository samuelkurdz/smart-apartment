import { createReducer, on } from '@ngrx/store';
import { LoaderState } from 'src/app/core/interface';
import { LoaderActions } from '../actions'

const initialState: LoaderState = {
  isLoading: true,
};

export const loaderReducer = createReducer(
  initialState,
  on(LoaderActions.toggleLoader, (state, { newState }): LoaderState => ({ isLoading: newState })),
);