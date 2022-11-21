import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  public postData:any;
  postid: number = 0;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Post Edit/View component init')
    console.log('ID : ' + this.route.snapshot.params['postId']);
    
    this.route.params.subscribe((params) => {
      console.log('params:::', params);
      this.postid = params['id'];
    
    });
    console.log(this.postid)
    this.postService.getPostData(this.postid).subscribe(response => (
      this.postData = response
    ));
  }
}
