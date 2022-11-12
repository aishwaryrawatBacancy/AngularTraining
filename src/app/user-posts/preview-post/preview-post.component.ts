import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.scss']
})
export class PreviewPostComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public title: string = "";
  public body: string = "";

  public commentsPost: Array<{id: number, name: string, email: string, body: string}> = [];

  ngOnInit(): void {
    let postId = this.route.snapshot.queryParams['id'];
    fetch("https://jsonplaceholder.typicode.com/posts/"+postId)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.title = response.title;
        this.body = response.body;
      })

    fetch("https://jsonplaceholder.typicode.com/comments?postId="+postId)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.commentsPost = response.map((comment: any) => {
          return{
            id: comment.id,
            name: comment.name,
            email: comment.email,
            body: comment.body
          }
        })
      })
  }

}
