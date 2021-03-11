import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IEvent } from '../../models/API/event.model';

@Injectable()
export class EventService {

  private readonly serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = `${environment.apiUrl}/api/v1/events`;
  }

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.serviceUrl);
  }

}
