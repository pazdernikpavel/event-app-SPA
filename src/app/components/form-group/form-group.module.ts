import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormGroupComponent } from './form-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormGroupComponent],
  exports: [FormGroupComponent]
})
export class FormGroupModule {}
