import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-temp-register',
  templateUrl: './temp-register.component.html',
  styleUrls: ['./temp-register.component.scss'],
})
export class TempRegisterComponent implements OnInit {

  user = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    hobby: '',
    password: '',
    confirm_password: ''
  }
  public hobbies = ['cricket', 'football', 'hockey'];

  constructor() {
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.user)
  }
}
