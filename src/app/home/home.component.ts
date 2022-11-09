import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';
import { Post } from './posts/post.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {

  posts: Post[] = [
    new Post('Post one','This is post one'),
    new Post('Post two','This is post two'),
    new Post('Post three','This is post three'),
  ];
    
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
  }

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Home component", this.shareDataService.count);
  }

  showDetails(post: any) {
    this.shareDataService.selectedMenu = 'explore';
    this.shareDataService.detailPost = post;
  }
}