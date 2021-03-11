import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LabelModule } from '../label/label.module';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LabelModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule {}
