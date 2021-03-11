import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EventService } from './services/event.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    EventService
  ]
})
export class ClientModule {}
