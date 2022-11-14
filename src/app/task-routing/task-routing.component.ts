
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPostService } from '../shared/services/user-post.service';


@Component({
  selector: 'app-task-routing',
  templateUrl: './task-routing.component.html',
  styleUrls: ['./task-routing.component.scss'],
})
export class TaskRoutingComponent implements OnInit {

  @Output() showMorePostEventEmitter  = new EventEmitter();
  postData: any[] = []
  
  constructor(private userPostService: UserPostService,
    private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postData = this.activatedRoute.snapshot.data['data'].map((post: any) => {
      return {
        id: post.id,
        title: post.title,
        body: post.body
      }
    });
    // const res = this.userPostService.getPosts().subscribe((data) => this.postData = data)
    // console.log(res)
  }

  showPost(post: any) {
    this.userPostService.userPosts = post;
    this.router.navigate(['postShow'],{ queryParams: {id: post.id} })
  }

}
