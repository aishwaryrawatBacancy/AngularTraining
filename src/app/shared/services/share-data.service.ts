import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject} from "rxjs";
import { Post } from "../models/post.model";

@Injectable()
export class ShareDataService{
    count = 0;
    selectedMenu: string = '';
    userPosts: any[] = [];
    trainingSubject = new Subject<boolean>();
    firebaseURL = "https://angulartraining-6eb52-default-rtdb.firebaseio.com/" //realtime DB

    constructor(private http: HttpClient){

    }
    updateCount(){
        this.count += 1;
    }

    getPosts(): Observable<Post[]>{
        //to trigger a get request. we require http client.
        return this.http.get<Post[]>(this.firebaseURL + 'posts.json')
        .pipe(map(posts => {
          const postsArray: Array<Post> = [];
          for(const key in posts){
            postsArray.push(posts[key]);
          }
          return postsArray;
        }));
    }

    addPost(post: Post){
      return this.http.post<any>(this.firebaseURL + '/posts.json', post);
    }

}

//has-a relationship - between two classes
