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

  public showValidationMessage: boolean = false;

  onSubmitTemplateBased(isFormValidate: any, user: any) {
    if(isFormValidate && user.password === user.confirmPassword){
      this.showValidationMessage = false;
      console.log(user);
    }
    else{
      this.showValidationMessage = true;
    }
  }

}
