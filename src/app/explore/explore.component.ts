import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  userPosts: any[] = [];
  constructor(public shareDataService: ShareDataService) { }

  ngOnInit(): void {
    this.userPosts.push(this.shareDataService.detailPost);
    console.log("User Posts", this.userPosts);
  }

}
