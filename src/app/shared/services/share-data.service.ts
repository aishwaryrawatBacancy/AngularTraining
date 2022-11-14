import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "src/app/home/posts/post.module";

@Injectable()
export class ShareDataService{
    count = 0;
    selectedMenu: string = '';
    detailPost: Post[] = [];
    userPosts: any[] = [];

    constructor(private http: HttpClient){

    }
    updateCount(){
        this.count += 1;
    }


   

}

//has-a relationship - between two classes