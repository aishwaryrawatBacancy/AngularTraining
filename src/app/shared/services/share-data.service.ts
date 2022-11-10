import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardData } from 'src/app/home/post-card-data';

@Injectable()
export class ShareDataService {
  count = 0;
  selectedMenu: string = '';
  userPosts: any[] = [];
  cardDetail: any[] = []

  constructor(private http: HttpClient) {}
  updateCount() {
    this.count += 1;
  }

  getPosts(): Observable<any> {
    //to trigger a get request. we require http client.
    return this.http.get<any>('http://localhost:3000/api/posts');
  }
}

//has-a relationship - between two classes
