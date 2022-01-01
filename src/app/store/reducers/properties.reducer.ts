import { createReducer, on } from '@ngrx/store';
import { PropertiesList } from 'src/app/core/interface';
import { PropertiesActions } from '../actions';


const initialState: PropertiesList = {
  body: "",
  agentInfo: undefined,
  role: "",
  title: "",
  records: [],
  showContactInfo: false

};

export const propertiesReducer = createReducer(
  initialState,
  on(PropertiesActions.setProperties, (state, { response }): PropertiesList => ({ ...state, ...response })),
);