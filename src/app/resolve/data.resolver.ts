import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostDataService } from '../shared/services/post-data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {

  constructor(private postService: PostDataService){}

  resolve(): Observable<any> {
    return this.postService.getAllPost();
  }
}
