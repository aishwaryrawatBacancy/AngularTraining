import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public user: any = {
    firstName: '',
    password:  ''
  };

  onSubmitTemplateBased(user: any) {
      console.log(user);
  }

}
