import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../shared/services/post-service";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  comments: any[] = [];
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params['postId']);
      this.getPostComments(params['postId']);
    })
  }

  getPostComments(postId:string|number) {
    this.postService.getPostComments(postId).subscribe((comments) => {
      this.comments = comments;
    })
  }
}
