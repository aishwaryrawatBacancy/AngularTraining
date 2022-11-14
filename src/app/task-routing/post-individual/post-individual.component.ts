import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPostService } from 'src/app/shared/services/user-post.service';


@Component({
  selector: 'app-post-individual',
  templateUrl: './post-individual.component.html',
  styleUrls: ['./post-individual.component.scss']
})
export class PostIndividualComponent implements OnInit {
  @Input() postShow: any = [];
  individualPost: any = []; 
  id: number = 0;
  public comments: Array<{id: number, name: string, email: string, body: string}> = [];

  constructor(private userPostService: UserPostService
    ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.userPostService.getPostsById(this.id).subscribe((data) => this.individualPost = data);
    this.userPostService.getCommentOnPost(this.id).subscribe((data) => this.comments = data);
  }

}
