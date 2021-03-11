import { Type } from '@angular/core';
import { Params } from '@angular/router';

import {
  BaseRouterStoreState,
  DEFAULT_ROUTER_FEATURENAME,
  RouterReducerState
} from '@ngrx/router-store';

import { eventFeatureName, IEventState } from '../../states/models/event.models';

export interface IAppState {
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState<IRouterStateUrl>;
  [eventFeatureName]: IEventState;
}

export interface IRouterStateUrl extends BaseRouterStoreState {
  queryParams: Params;
  params: Params;
  component: string | Type<any>;
}
