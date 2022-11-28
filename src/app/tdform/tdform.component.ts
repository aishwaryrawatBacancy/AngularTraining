import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TdformComponent implements OnInit {
  @ViewChild('form') demoForm: NgForm;
  subscription = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = '';
  error = true;

  constructor() { }

  ngOnInit(): void {
  }

  validator() {
    if (this.demoForm.value.confirmpassword === this.demoForm.value.password) {
      if (this.demoForm.value.number.toString().length === 10) {
        this.error = false;
      }
    }
  }

  onSubmit() {
    this.validator();
    if (this.error === false) {
      console.log("submitted....", this.demoForm.value);
    } else {
      console.log("Error....");
    }

  }
}
