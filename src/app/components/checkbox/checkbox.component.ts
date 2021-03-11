import { Component, Input, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'slido-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() public control: FormControl;
  @Input() public name: string;
  @Input() public text: TemplateRef<any>;
  @Input() public requiredText: TemplateRef<any>;

}
