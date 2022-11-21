import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts:any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    console.log('Post component init')
    this.postService.getPosts().subscribe(response => (
      this.posts = response
    ));
  }
}
