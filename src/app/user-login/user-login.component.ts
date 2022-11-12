import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  public userEmail: string = "";
  public password: string = "";

  ngOnInit(): void {
  }

  public onLogin(): void{
    if(this.userEmail === "jemis.maru@bacancy.com" && this.password === "12345678"){
      this.authService.login();
      alert("Successfully login!");
      this.router.navigate(["posts"]);
    }
    else{
      alert("login failed!");
    }
  }

}
