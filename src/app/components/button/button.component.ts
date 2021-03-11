import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'slido-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public secondary = false;
  @Input() public disabled = false;
  @Input() public type = 'button';
  @Input() public isLoading = false;
  @Output() public buttonClick = new EventEmitter<MouseEvent>();

  @HostBinding('class')
  public get classes(): string {
    const classes: string[] = [];

    if (this.secondary) classes.push('secondary');

    return classes.join(' ');
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (!this.disabled && !this.isLoading) this.buttonClick.emit(event);
  }

}
