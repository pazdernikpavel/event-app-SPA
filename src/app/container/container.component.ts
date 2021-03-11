import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routingAnimations } from './container.animations';

@Component({
  selector: 'slido-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [routingAnimations]
})
export class ContainerComponent {
  public prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
