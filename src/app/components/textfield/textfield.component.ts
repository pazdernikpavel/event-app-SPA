import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'slido-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent {

  @Input() public name: string;
  @Input() public id: string;
  @Input() public placeholder: string;
  @Input() public control: FormControl;

}
