import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from '../../components/button/button.module';
import { CheckboxModule } from '../../components/checkbox/checkbox.module';
import { DatepickerModule } from '../../components/datepicker/datepicker.module';
import { FormGroupModule } from '../../components/form-group/form-group.module';
import { FormModule } from '../../components/form/form.module';
import { InputModule } from '../../components/input/input.module';
import { TextfieldModule } from '../../components/textfield/textfield.module';
import { EventCreateComponent } from './event-create.component';
import { eventCreateRoutes } from './event-create.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(eventCreateRoutes),
    ReactiveFormsModule,
    FormModule,
    FormGroupModule,
    InputModule,
    ButtonModule,
    TextfieldModule,
    CheckboxModule,
    DatepickerModule
  ],
  declarations: [EventCreateComponent],
  exports: [EventCreateComponent]
})
export class EventCreateModule {}
