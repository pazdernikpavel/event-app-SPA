import { Route } from '@angular/router';

import { LandingComponent } from '../pages/landing/landing.component';
import { AppRoutes } from './app.routes.misc';

export const appRoutes: Route[] = [
  {
    path: AppRoutes.LIST,
    loadChildren: () => import('../pages/event-list/event-list.module').then(m => m.EventListModule),
    data: { animation: 'Events' }
  },
  {
    path: AppRoutes.CREATE,
    loadChildren: () => import('../pages/event-create/event-create.module').then(m => m.EventCreateModule),
    data: { animation: 'Signup' }
  },
  {
    path: AppRoutes.REGISTERED,
    loadChildren: () => import('../pages/event-registered/event-registered.module').then(m => m.EventRegisteredModule),
    // TODO: Add guard against store so this page can be visited only after event is created
    data: { animation: 'Registered' }
  },
  {
    path: '',
    component: LandingComponent,
    data: { animation: 'Landing' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
