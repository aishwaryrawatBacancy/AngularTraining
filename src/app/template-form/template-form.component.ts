import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  templateForm = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Successfull');
    console.table(this.templateForm);
  }

}
