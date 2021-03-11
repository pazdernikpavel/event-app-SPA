import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from '../../components/button/button.module';
import { EventRegisteredComponent } from './event-registered.component';
import { eventRegisteredRoutes } from './event-registered.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(eventRegisteredRoutes),
    ButtonModule
  ],
  declarations: [EventRegisteredComponent]
})
export class EventRegisteredModule {}
