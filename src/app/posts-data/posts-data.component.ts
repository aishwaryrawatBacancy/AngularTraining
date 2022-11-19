import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../shared/services/post-data.service';
import { Router } from '@angular/router';
import { PostsData } from './posts-data';

@Component({
  selector: 'app-posts-data',
  templateUrl: './posts-data.component.html',
  styleUrls: ['./posts-data.component.scss'],
  providers: [PostDataService],
})
export class PostsDataComponent implements OnInit {
  public posts: PostsData[] = [];
  public queryParams_postId: number = 1;

  constructor(
    private postDataService: PostDataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.postDataService.getPosts().subscribe((data) => (this.posts = data));
    // this.posts = this.route.snapshot.data['PostsData'].map((post: any) => {
    //   return {
    //     id: post.id,
    //     title: post.title,
    //     body: post.body
    //   }
    // })
  }


  onClick(id: number): void {
    this.router.navigate([`posts/${id}`]);
  }
}
