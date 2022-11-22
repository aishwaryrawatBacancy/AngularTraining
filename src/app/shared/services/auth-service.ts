import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  public isLogin: boolean = false;
  constructor() {
  }

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
  }
}
