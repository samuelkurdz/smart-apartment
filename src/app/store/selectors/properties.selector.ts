import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PropertiesList } from 'src/app/core/interface';

export const selectProperties = createFeatureSelector<PropertiesList>('properties');

export const selectRecords = createSelector(
  selectProperties,
  (state) => state.records
);

export const selectAgentInfo = createSelector(
  selectProperties,
  (state) => state.agentInfo
)