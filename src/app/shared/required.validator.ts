import { AbstractControl } from '@angular/forms';

export function ValidateRequired(control: AbstractControl) {
  if (control.value == '') {
    console.log('Inside ValidateRequired ')
    console.log(control.value)
    return { requiredCustomValidation: true };
  }
  return null;
}