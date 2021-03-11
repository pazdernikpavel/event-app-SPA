import { ValidatorFn, Validators } from '@angular/forms';
// this email validator disallows domain withouth TLD extension
// tslint:disable-next-line: max-line-length
const pattern = Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/);

export const emailValidator: ValidatorFn = control => {
  if (pattern(control)) {
    return { email: true };
  }
  return null;
};
