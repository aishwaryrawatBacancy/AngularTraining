import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../shared/services/post-service";

export interface PostInterface {
  id: number
  userId: number
  body: string
  title: string
}

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
  providers: [PostService]
})
export class EditPostComponent implements OnInit {

  // public postId: number|string|null = '';
  public post:any = [];
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('post dataaa', this.post);
    // this.postId = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((params) => {
      this.getPost(params['id']);
    });
  }

  getPost(postId: number|string) {
    this.postService.getPost(postId).subscribe((post) => {
      this.post = post;
      console.log('post data', this.post);
    });
  }

}
