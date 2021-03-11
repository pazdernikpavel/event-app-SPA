import { Component, Input } from '@angular/core';

@Component({
  selector: 'slido-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {

  @Input() public useAhrefElement = true;
  @Input() public text: string;
  @Input() public url: any[];

}
