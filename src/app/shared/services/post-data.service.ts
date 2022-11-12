import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private httpClient: HttpClient) { }

  getAllPost(): any{
    return this.httpClient.get<any>("https://jsonplaceholder.typicode.com/posts");
  }
}
