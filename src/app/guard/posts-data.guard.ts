import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PostDataService } from '../shared/services/post-data.service';

@Injectable({
  providedIn: 'root',
})
export class PostsDataGuard implements Resolve<any> {
  constructor(private postDataService: PostDataService) {}
  resolve() {
   return this.postDataService.getPosts();
  }
}
