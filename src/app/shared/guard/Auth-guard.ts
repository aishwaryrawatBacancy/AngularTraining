import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../services/auth-service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogin) {
      return true;
    } else {
      return this.router.navigate(['/']);
    }
  }

}
