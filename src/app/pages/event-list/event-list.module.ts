import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from '../../components/button/button.module';
import { EventCardModule } from '../../components/event-card/event-card.module';
import { SpinnerModule } from '../../components/spinner/spinner.module';
import { EventListComponent } from './event-list.component';
import { eventListRoutes } from './event-list.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(eventListRoutes),
    EventCardModule,
    SpinnerModule,
    ButtonModule
  ],
  declarations: [EventListComponent],
  exports: [EventListComponent]
})
export class EventListModule {}
