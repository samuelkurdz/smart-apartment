import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ListResponse } from 'src/app/core/interface';

export const selectProperties = createFeatureSelector<ListResponse>('properties');

export const selectRecords = createSelector(
  selectProperties,
  (state) => state.records
);

export const selectAgentInfo = createSelector(
  selectProperties,
  (state) => state.agentInfo
)