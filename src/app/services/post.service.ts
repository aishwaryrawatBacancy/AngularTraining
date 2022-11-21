import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    console.log('getPosts() is calling')
    console.log(this.httpClient.get(this.url))
    return this.httpClient.get(this.url);
  }

  getPostData(postId:number) {
    console.log('Get single post data');
    console.log(this.url +"/"+ postId);
    return this.httpClient.get(this.url +"/"+ postId)
  }
}
