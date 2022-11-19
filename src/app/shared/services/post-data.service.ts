import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Comments, PostsData } from 'src/app/posts-data/posts-data';

@Injectable({
  providedIn: 'root'
}
)
export class PostDataService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsData[]> {
    return this.http.get<PostsData[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: string): Observable<PostsData> {
    return this.http.get<PostsData>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getComments(id: string): Observable<Comments[]> {
    return this.http.get<Comments[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
  }
}
