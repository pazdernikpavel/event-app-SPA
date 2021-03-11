import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { IEvent } from '../../models/API/event.model';

@Component({
  selector: 'slido-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() public event: IEvent;

  @HostBinding('class.card__is-in-past')
  public isInPast = false;

  @HostBinding('class.card__flipped')
  public isFlipped = false;

  public get dayDifference(): number {
    const today = new Date();
    const eventDate = new Date(this.event.date);
    const diffTime = Math.abs(today.getTime() - eventDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  public ngOnInit(): void {
    const today = new Date();
    const eventDate = new Date(this.event.date);
    this.isInPast = today > eventDate;
  }

  public flipCard(): void {
    this.isFlipped = this.isInPast ? false : !this.isFlipped;
  }
}
