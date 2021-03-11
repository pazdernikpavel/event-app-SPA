import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'slido-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() public type = 'text';
  @Input() public showLabel = true;
  @Input() public required = false;
  @Input() public name: string;
  @Input() public id: string;
  @Input() public placeholder: string;
  @Input() public control: FormControl;

}
