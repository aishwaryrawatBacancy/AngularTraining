import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showValidationMessage: boolean = false;

  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, this.emailValidator]),
    "password": new FormControl("", Validators.required),
    "confirmPassword": new FormControl("", Validators.required),
  }, this.confirmPasswordValidator);

  emailValidator(control: FormControl): { isEmailValidate: boolean } | null {
    if(control.value != "" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value))){
      return { isEmailValidate: false }
    }
    return null;
  }

  confirmPasswordValidator(control: AbstractControl) {
    if(control.get('confirmPassword')?.value != "" && control.get('password')?.value != control.get('confirmPassword')?.value){
      return { isPassAndConfirmPassMatch: false }
    }
    return null;
  }

  onSubmit() {
    if(this.form.valid){
      this.showValidationMessage = false;
      console.log(this.form.value);
    }
    else{
      this.showValidationMessage = true;
    }
  }

}
