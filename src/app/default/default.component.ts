import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.router.navigate(['register']);
  }

  onLogin() {
    this.router.navigate(['login']);
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
