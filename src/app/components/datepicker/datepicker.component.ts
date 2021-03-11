import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'slido-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  @Input() public type = 'text';
  @Input() public showLabel = true;
  @Input() public required = false;
  @Input() public name: string;
  @Input() public id: string;
  @Input() public placeholder: string;
  @Input() public control: FormControl;

}
