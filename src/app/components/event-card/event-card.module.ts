import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../button/button.module';
import { LinkButtonModule } from '../link-button/link-button.module';
import { EventCardComponent } from './event-card.component';

@NgModule({
  imports: [
    CommonModule,
    LinkButtonModule,
    ButtonModule
  ],
  declarations: [EventCardComponent],
  exports: [EventCardComponent]
})
export class EventCardModule {}
