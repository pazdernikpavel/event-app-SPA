import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../models/ngrx/state.model';
import { eventReducer } from './reducers/event.reducer';

export const appReducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
  event: eventReducer
};
