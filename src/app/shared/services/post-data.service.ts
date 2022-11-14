import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}
)
export class PostDataService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: string): Observable<any> {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getComments(id: string): Observable<any> {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
  }
}
