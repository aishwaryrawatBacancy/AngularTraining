import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(): void {
    this.isLoggedIn = true;
    localStorage.setItem("isLoggedIn", "true");
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem("isLoggedIn", "false");
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}