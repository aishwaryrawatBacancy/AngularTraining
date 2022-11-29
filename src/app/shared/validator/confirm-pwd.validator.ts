import {AbstractControl} from "@angular/forms";

export function ConfirmPwd(control: AbstractControl) {
  console.log(control.get('password')?.value, control.get('confirm_password')?.value);
  if (control.get('password')?.value !== control.get('confirm_password')?.value) {
    return {'error': true};
  }
  return null;
  // control.get('confirm-password')?.setErrors({
  //   'match': false
  // });
}
