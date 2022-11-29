import {Directive, Input} from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appMatchPwd]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchPwdDirective, multi: true}]
})
export class MatchPwdDirective implements Validator {

  @Input('appMatchPwd') MatchPwd: string[] = [];

  constructor() {
  }

  /*validate(abstractControl: AbstractControl): ValidationErrors | null {
    // console.log(abstractControl)
    if (abstractControl.get('password')?.value !== abstractControl.get('confirm_password')?.value) {
      abstractControl.get('confirm_password')?.setErrors({matching: true});
      return {'error': true}
    }
    abstractControl.get('confirm_password')?.setErrors(null);
    return null;
  }*/
  validate(formGroup: FormGroup): ValidationErrors | null {
    // return ConfirmPwd(this.MatchPwd[0], this.MatchPwd[1])(formGroup);
    let pwd = this.MatchPwd[0];
    let confirmPwd = this.MatchPwd[1];
    if (formGroup.controls[pwd]?.value !== formGroup.controls[confirmPwd]?.value) {
      formGroup.controls[confirmPwd]?.setErrors({matching: true});
      return {'error': true}
    }
    formGroup.controls[confirmPwd]?.setErrors(null);
    return null;
  }
}

/*
export function ConfirmPwd(pwd: string, confirmPwd: string) {
  return (formGroup: FormGroup) => {
    if (formGroup.controls[pwd]?.value !== formGroup.controls[confirmPwd]?.value) {
      formGroup.controls[confirmPwd]?.setErrors({matching: true});
      return {'error': true}
    }
    formGroup.controls[confirmPwd]?.setErrors(null);
    return null;
  }
}*/
