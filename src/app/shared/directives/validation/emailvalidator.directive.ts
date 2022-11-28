import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: EmailvalidatorDirective,
      multi: true
    }
  ]
})

export class EmailvalidatorDirective implements Validator {

  validator: ValidatorFn;
  constructor() {
    this.validator = this.emailValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }


  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null=> {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };

    
  }

}
