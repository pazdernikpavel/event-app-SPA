import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxDatePickerModule } from '@ngx-tiny/date-picker';

import { LabelModule } from '../label/label.module';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    LabelModule,
    ReactiveFormsModule,
    NgxDatePickerModule
  ],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent]
})
export class DatepickerModule {}
