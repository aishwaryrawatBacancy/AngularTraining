import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDataService } from '../shared/services/post-data.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostDataService) {
    this.posts = this.route.snapshot.data['postList'].map((post: any) => {
      return{
        id: post.id,
        title: post.title,
        description: post.body
      }
    })
  }

  public posts: Array<{ id: number, title: string, description: string}> = [];

  ngOnInit(): void {
    // this.postService.getAllPost()
    //   .subscribe((response: any) => {
    //     this.posts = response.map((post: any) => {
    //       return{
    //         id: post.id,
    //         title: post.title,
    //         description: post.body
    //       }
    //     })
    //   });
  }

  public previewPost(postId: number) :void{
    console.log(postId);
    this.router.navigate(["previewPost"], { queryParams: { id: postId } });
  }

}
