import { Component } from '@angular/core';

import { AppRoutes } from '../../main/app.routes.misc';

@Component({
  selector: 'slido-event-registered',
  templateUrl: './event-registered.component.html',
  styleUrls: ['./event-registered.component.scss']
})
export class EventRegisteredComponent {
  public readonly appRoutes = AppRoutes;
}
