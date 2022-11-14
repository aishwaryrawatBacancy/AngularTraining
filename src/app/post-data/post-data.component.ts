import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../shared/services/post-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IDeactivate } from '../guard/auth-deactivate.guard';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
  providers: [PostDataService],
})
export class PostDataComponent implements OnInit, IDeactivate {
  public post: any = {};
  public comments: any = [];
  public id: string = '';

  constructor(
    private postDataService: PostDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.postDataService
      .getPost(this.id)
      .subscribe((data) => (this.post = data));

    this.postDataService
      .getComments(this.id)
      .subscribe((data) => (this.comments = data));
  }

  canExit(): boolean {
    if (confirm('are you sure')) {
      return true;
    } else {
      return false;
    }
  }
}
