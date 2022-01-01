import { createReducer, on } from '@ngrx/store';
import { ListResponse } from 'src/app/core/interface';
import { PropertiesActions } from '../actions';


const initialState: ListResponse = {
  body: "",
  agentInfo: undefined,
  role: "",
  title: "",
  records: [],
  showContactInfo: false

};

export const propertiesReducer = createReducer(
  initialState,
  on(PropertiesActions.setProperties, (state, { response }): ListResponse => ({ ...state, ...response })),
);