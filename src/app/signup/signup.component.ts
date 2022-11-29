import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateMatchPassword } from '../shared/matchpassword.validator';
import { ValidateRequired } from '../shared/required.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  myForm!: FormGroup;
  signUpForm!:  FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    });


    /** signUpForm is for reactive form with custom validation */
   // this.signUpForm = new FormGroup({
    this.signUpForm = this.fb.group({
      name: new FormControl('', [ValidateRequired]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
    }, { 
      validator: ValidateMatchPassword('password', 'confirmPassword')
    });
  }

  signUpFormSubmit(form: FormGroup) {
    console.log('Sign up form is submitted')
    console.log('Form Status: ' + this.myForm.status)
    console.log('Form Value : ' + this.myForm.value);
    console.log('Inputted Data is : '+ form.value.name, form.value.email, form.value.password, form.value.confirmPassword)
  }

}
