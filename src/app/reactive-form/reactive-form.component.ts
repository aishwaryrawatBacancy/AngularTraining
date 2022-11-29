import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  genders: string[] = ['male', 'female'];
  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male', [Validators.required]),
      'hobbies': new FormArray([]),
      'contact_number': new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'password': new FormControl(null, Validators.required),
      'confirm_password': new FormControl(null, Validators.required),
    },
      {
        validators: this.validatingForm('password', 'confirm_password')
      });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.registerForm.value)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(control);
  }

  get f() { return this.registerForm.controls }

  get controls() {
    return (this.registerForm.get('hobbies') as FormArray).controls;
  }

  validatingForm(controlName1: string, controlName2: string) {
    return (formGroup: FormGroup) => {
      const controlValue1 = formGroup.controls[controlName1];
      const controlValue2 = formGroup.controls[controlName2];
      if (controlValue2.errors) {
        return;
      }

      if (controlValue1.value !== controlValue2.value) {
        controlValue2.setErrors({ validatingForm: true })
      } else {
        controlValue2.setErrors(null)
      }
    }
  }

}
