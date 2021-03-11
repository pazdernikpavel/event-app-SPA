import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TextfieldComponent } from './textfield.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [TextfieldComponent],
  exports: [TextfieldComponent]
})
export class TextfieldModule {}
