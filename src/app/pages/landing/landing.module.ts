import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from '../../components/button/button.module';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  declarations: [LandingComponent],
  exports: [LandingComponent]
})
export class LandingModule {}
