import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../shared/services/post-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts-data',
  templateUrl: './posts-data.component.html',
  styleUrls: ['./posts-data.component.scss'],
  providers: [PostDataService],
})
export class PostsDataComponent implements OnInit {
  public posts: any[] = [];
  public queryParams_postId: number = 1;
  public queryParamsData: any = [];

  constructor(
    private postDataService: PostDataService,
    private router: Router,
    private route: ActivatedRoute
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
    this.router.navigate(['post'], {queryParams: {id: id}});
  }
}
