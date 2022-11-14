import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserPostService } from '../shared/services/user-post.service';


@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private userPostService:UserPostService) {
    
  }
 
  resolve() {
    return this.userPostService.getPosts();
  }
   
}
