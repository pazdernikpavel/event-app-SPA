import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'slido-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @HostBinding('class.large')
  @Input() public isLarge = false;
}
