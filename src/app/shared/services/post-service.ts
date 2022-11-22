import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class PostService{
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1');
  }

  getPost(postId: number|string): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/`+postId);
  }

  getPostComments(postId: string|number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=`+postId);
  }
}
