import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ConfirmPwd} from "../../shared/validator/confirm-pwd.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
    gender: new FormControl('male', Validators.required),
    hobby: new FormControl('', [Validators.required]),
    passwordValidation: new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required])
    }, {
      validators: ConfirmPwd
    })
  });

  public hobbies = ['cricket', 'football', 'hockey'];

  constructor() {
  }

  ngOnInit(): void {
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    if (this.registerForm.valid) {
      console.log('form submitted', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
