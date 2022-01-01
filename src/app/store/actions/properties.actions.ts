import { createAction, props, union } from '@ngrx/store';
import { ListResponse } from 'src/app/core/interface';

export const setProperties = createAction(
    '[Properties] set properies data',
    props<{response: ListResponse}>()
  );

const all = union({ setProperties });

export type PropertiesActionsUnion =  typeof all;
