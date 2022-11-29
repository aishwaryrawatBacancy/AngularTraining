import { AbstractControl, FormGroup } from '@angular/forms';

export function ValidateMatchPassword(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors /* && !matchingControl.errors.validateMatchPassword */) {
        return;
    }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ validateMatchPassword: true });
    } else {
        matchingControl.setErrors(null);
    }
  }
}