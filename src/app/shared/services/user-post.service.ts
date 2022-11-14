import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  userPosts: any[] = [];

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostsById(id: number): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts/" + id);
  }

  getCommentOnPost(id: number): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/comments?postId=" + id);
  }
}
