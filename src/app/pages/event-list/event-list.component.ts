import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

import { AppRoutes } from '../../main/app.routes.misc';
import { IAPIErrorResponse } from '../../models/API/error.model';
import { IEvent } from '../../models/API/event.model';
import { IAppState } from '../../models/ngrx/state.model';
import { GetEventList } from '../../states/actions/event.actions';
import { getEventList, getEventListError, isLoadingEventList } from '../../states/selectors/event.selectors';

@Component({
  selector: 'slido-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnDestroy {
  public events: IEvent[];
  public readonly appRoutes = AppRoutes;
  public readonly isLoadingEventList$: Observable<boolean>;
  public readonly eventListError$: Observable<IAPIErrorResponse>;
  private readonly ngDestroy$: Subject<void>;

  constructor(private store: Store<IAppState>) {
    this.ngDestroy$ = new Subject<void>();

    this.store
      .pipe(
        select(getEventList),
        take(1),
        filter(events => !events))
      .subscribe(() => this.store.dispatch(new GetEventList()));

    this.store
      .pipe(
        select(getEventList),
        takeUntil(this.ngDestroy$))
      .subscribe(events => this.events = events);

    this.isLoadingEventList$ = this.store.select(isLoadingEventList);
    this.eventListError$ = this.store.select(getEventListError);
  }

  public ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
