import { createAction, props, union } from '@ngrx/store';
import { PropertiesList } from 'src/app/core/interface';

export const setProperties = createAction(
    '[Properties] set properies data',
    props<{response: PropertiesList}>()
  );

const all = union({ setProperties });

export type PropertiesActionsUnion =  typeof all;
