import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  genders = ['Male', 'Female'];
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmpassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      gender: new FormControl('Male'),
      hobbies: new FormArray([])
    },
    {
      validators: this.MustMatch('password', 'confirmpassword')
    })
  }

  ngOnInit(): void {

  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (fromGroup: FormGroup) => {
      const control = fromGroup.controls[controlName];
      const matchingControl = fromGroup.controls[matchingControlName];
      if(matchingControl.errors) {
        return;
      }

      if(control.value !== matchingControl.value) {
        matchingControl.setErrors({MustMatch:true})
        } else {
          matchingControl.setErrors(null)
        }
     }
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  get f() { return this.signupForm.controls }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

}
