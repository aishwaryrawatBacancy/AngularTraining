import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SignupNewUser, SignUpResponse } from "../models/users.model";

@Injectable({
  providedIn:'root'
})
export class AuthService{
  authUrlSignUp = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOiRuFlM1F-xIoqvtE2kFpXXI79y7VRgo";
  authURLSignIn = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOiRuFlM1F-xIoqvtE2kFpXXI79y7VRgo";

  userSubject: Subject<SignUpResponse> = new Subject<SignUpResponse>();
  user!: SignUpResponse;

  constructor(private http: HttpClient){}

  signUp(newUser: SignupNewUser): Observable<SignUpResponse>{
    return this.http.post<SignUpResponse>(this.authUrlSignUp, newUser);
  }

  signIn(user: SignupNewUser){
    return this.http.post<SignUpResponse>(this.authURLSignIn, user);
  }
}
