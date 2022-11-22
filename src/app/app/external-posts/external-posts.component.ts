import { Component, OnInit } from '@angular/core';
import {PostService} from "../../shared/services/post-service";

@Component({
  selector: 'app-external-posts',
  templateUrl: './external-posts.component.html',
  styleUrls: ['./external-posts.component.scss'],
  providers: [PostService]
})
export class ExternalPostsComponent implements OnInit {

  public posts:any[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
