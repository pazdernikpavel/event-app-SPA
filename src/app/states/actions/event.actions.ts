/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';

import { IAPIErrorResponse } from '../../models/API/error.model';
import { ICreateEvent, IEvent } from '../../models/API/event.model';

export enum EventActions {
  GET_EVENT_LIST = '[Event] Get list',
  GET_EVENT_LIST_SUCCESS = '[Event] Get list success',
  GET_EVENT_LIST_ERROR = '[Event] Get list error',
  CREATE_EVENT = '[Event] Create',
  CREATE_EVENT_SUCCESS = '[Event] Create success',
  CREATE_EVENT_ERROR = '[Event] Create error'
}

export class GetEventList implements Action {
  public readonly type = EventActions.GET_EVENT_LIST;
}

export class GetEventListSuccess implements Action {
  public readonly type = EventActions.GET_EVENT_LIST_SUCCESS;
  constructor(public payload: IEvent[]) {}
}

export class GetEventListError implements Action {
  public readonly type = EventActions.GET_EVENT_LIST_ERROR;
  constructor(public payload: IAPIErrorResponse) {}
}

export class CreateEvent implements Action {
  public readonly type = EventActions.CREATE_EVENT;
  constructor(public payload: ICreateEvent) {}
}

export class CreateEventSuccess implements Action {
  public readonly type = EventActions.CREATE_EVENT_SUCCESS;
}

export class CreateEventError implements Action {
  public readonly type = EventActions.CREATE_EVENT_ERROR;
  constructor(public payload: IAPIErrorResponse) {}
}

export type EventAction =
  GetEventList |
  GetEventListSuccess |
  GetEventListError |
  CreateEvent |
  CreateEventSuccess |
  CreateEventError;
