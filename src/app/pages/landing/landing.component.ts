import { Component } from '@angular/core';

import { AppRoutes } from 'src/app/main/app.routes.misc';

@Component({
  selector: 'slido-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  public readonly appRoutes = AppRoutes;
}
