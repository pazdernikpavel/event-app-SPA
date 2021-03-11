import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { AppRoutes } from 'src/app/main/app.routes.misc';

import { EventService } from '../../client/services/event.service';
import {
  CreateEvent,
  CreateEventSuccess,
  EventActions,
  GetEventList,
  GetEventListError,
  GetEventListSuccess
} from '../actions/event.actions';

@Injectable()
export class EventEffects {

  @Effect()
  public getEventList$ = this.storeActions.pipe(
    ofType<GetEventList>(EventActions.GET_EVENT_LIST),
    switchMap(() => this.eventService.getEvents().pipe(
      map(response => new GetEventListSuccess(response)),
      catchError((error: HttpErrorResponse) => of(new GetEventListError({
        status: error.status,
        message: error.message
      })))
    ))
  );

  @Effect()
  public createEvent$ = this.storeActions.pipe(
    ofType<CreateEvent>(EventActions.CREATE_EVENT),
    // Here would be switchMap with POST service call with action params and catchError inside of it
    delay(5000), // Delay serves as mock to HTPP response
    mapTo(new CreateEventSuccess())
  );

  @Effect({ dispatch: false })
  public handleCreateEventSuccess$ = this.storeActions.pipe(
    ofType<CreateEventSuccess>(EventActions.CREATE_EVENT_SUCCESS),
    tap(() => this.router.navigate(['/', AppRoutes.REGISTERED]))
  );

  constructor(
    private storeActions: Actions,
    private eventService: EventService,
    private router: Router
  ) {}
}
