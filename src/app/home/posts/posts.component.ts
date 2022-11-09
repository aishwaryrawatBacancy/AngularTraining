import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/shared/services/share-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
  }

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Post Component", this.shareDataService.count);
  }

}
