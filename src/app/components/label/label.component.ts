import { Component, Input } from '@angular/core';

@Component({
  selector: 'slido-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {

  @Input() public required = false;
  @Input() public name: string;

}
