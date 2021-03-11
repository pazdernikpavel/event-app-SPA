import { Route } from '@angular/router';

import { EventListComponent } from './event-list.component';

export const eventListRoutes: Route[] = [
  {
    path: '',
    component: EventListComponent
  }
];
