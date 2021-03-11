import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ICreateEvent } from '../../models/API/event.model';
import { IAppState } from '../../models/ngrx/state.model';
import { CreateEvent } from '../../states/actions/event.actions';
import { isCreatingEvent } from '../../states/selectors/event.selectors';
import { checkboxValidator } from '../../utils/checkbox-validator';
import { emailValidator } from '../../utils/email-validator';

@Component({
  selector: 'slido-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent {
  public readonly createEventFormGroup: FormGroup;
  public readonly isCreatingEvent$: Observable<boolean>;

  constructor(
    private store: Store<IAppState>
  ) {
    this.createEventFormGroup = new FormGroup({
      organizer: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, emailValidator])
      }),
      event: new FormGroup({
        name: new FormControl(null, Validators.required),
        date: new FormControl(null, Validators.required),
        capacity: new FormControl(null, Validators.required),
        price: new FormControl(null, Validators.required),
        description: new FormControl(null),
        termsAgreed: new FormControl(false, checkboxValidator)
      })
    });

    this.isCreatingEvent$ = this.store.pipe(
      select(isCreatingEvent)
    );
  }

  public submit(): void {
    if (this.createEventFormGroup.invalid) {
      this.createEventFormGroup.markAllAsTouched();
    } else {
      const input: ICreateEvent = this.createEventFormGroup.value;
      this.store.dispatch(new CreateEvent(input));
    }
  }

}
