import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { PostIndividualComponent } from '../task-routing/post-individual/post-individual.component';


@Injectable({
  providedIn: 'root'
})
export class AuthDeactiveGuard implements CanDeactivate<PostIndividualComponent> {
  constructor(private authService: AuthService) {}

  canDeactivate(component: PostIndividualComponent) {
    const isLoggedIn = this.authService.isAuthenticated();
      if(isLoggedIn) {
        return window.confirm('Are you sure you want to navigate ?')
      }
    return true;
  }
  
}
