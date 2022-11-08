import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  providers: [ShareDataService]
})
export class ExploreComponent implements OnInit {
  userPosts: any[] = [];
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
    console.log("User Posts", this.shareDataService.userPosts);
    this.userPosts = this.shareDataService.userPosts;
  }

}
