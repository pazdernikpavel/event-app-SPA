import { Action } from '@ngrx/store';

import { EventAction, EventActions } from '../actions/event.actions';
import { IEventState } from '../models/event.models';

const initialState: IEventState = {
  isCreatingEvent: false,
  isLoadingEventList: false,
  eventList: null,
  eventListError: null,
  createEventError: null
};

export function eventReducer(
  state: IEventState = initialState,
  generic: Action): IEventState {

  const action = generic as EventAction;

  switch (action.type) {

    case EventActions.GET_EVENT_LIST: {
      return {
        ...state,
        isLoadingEventList: true
      };
    }

    case EventActions.GET_EVENT_LIST_SUCCESS: {
      return {
        ...state,
        isLoadingEventList: false,
        eventList: action.payload
      };
    }

    case EventActions.GET_EVENT_LIST_ERROR: {
      return {
        ...state,
        isLoadingEventList: false,
        eventList: [],
        eventListError: action.payload
      };
    }

    case EventActions.CREATE_EVENT: {
      return {
        ...state,
        isCreatingEvent: true
      };
    }

    case EventActions.CREATE_EVENT_SUCCESS: {
      return {
        ...state,
        isCreatingEvent: false
      };
    }

    default: return state;
  }
}
