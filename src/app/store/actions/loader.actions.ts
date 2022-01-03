import { createAction, props, union } from '@ngrx/store';

export const toggleLoader = createAction(
    '[Loader] toggle loader',
    props<{newState: boolean}>()
  );

const all = union({ toggleLoader });

export type LoaderActionsUnion =  typeof all;
