import { createFeatureSelector, createSelector } from '@ngrx/store';

import { eventFeatureName, IEventState } from '../models/event.models';

export const getEventState = createFeatureSelector<IEventState>(eventFeatureName);

export const getEventList = createSelector(
  getEventState,
  state => state.eventList
);

export const getEventListError = createSelector(
  getEventState,
  state => state.eventListError
);

export const isLoadingEventList = createSelector(
  getEventState,
  state => state.isLoadingEventList
);

export const isCreatingEvent = createSelector(
  getEventState,
  state => state.isCreatingEvent
);
