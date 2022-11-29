import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  reactiveForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100)
      ]
    ],
    email: [
      '', 
      [
        Validators.required,
        Validators.email
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]
    ],
    confirm_password: [
      '',
      [
        Validators.required
      ]
    ]
  });

  ngOnInit(): void {
  }

  get reactiveFormControl(){
    return this.reactiveForm.controls;
  }

  onSubmit(){
    if(this.reactiveForm.valid){
      console.log(this.reactiveForm);
    }
  }

}
