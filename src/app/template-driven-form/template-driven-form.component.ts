import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('f') registerForm!: NgForm;
  defaultHobby: string = "Singing";
  genders: string[] = ["male", "female"];

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.registerForm.value)
    this.registerForm.reset();
  }

}
