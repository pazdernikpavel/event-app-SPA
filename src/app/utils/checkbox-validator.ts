import { ValidatorFn } from '@angular/forms';

export const checkboxValidator: ValidatorFn = control => {
  if (control.value === true || control.value === 'true') return null;
  else return { required: true };
};
