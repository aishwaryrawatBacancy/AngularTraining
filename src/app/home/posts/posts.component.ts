import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/shared/services/share-data.service';
import { FormGroup, FormControl } from '@angular/forms'
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postForm!: FormGroup;
  posts: Array<Post> = [];
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.shareDataService.getPosts().subscribe(posts => {
      if(posts){
        console.log("posts", posts);
        this.posts = posts;
      }
    })
  }

  initializeForm(){
    this.postForm = new FormGroup({
      title : new FormControl(null),
      content: new FormControl(null),
    })
  }

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Post Component", this.shareDataService.count);
  }

  postLiked(){
    this.shareDataService.trainingSubject.next(true);
  }

  addPosts(){
    const newPost = {
      title: this.postForm.value.title,
      content: this.postForm.value.content
    }

    this.shareDataService.addPost(newPost).subscribe(post => {
      if(post){
        this.postForm.reset();
      }
    });
  }
}
