import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  userPosts: any[] = [];
  cardData: any[] = [];
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
    console.log("User Posts", this.shareDataService.userPosts);
    this.userPosts = this.shareDataService.userPosts;
    this.cardData.push(this.shareDataService.cardDetail);
  }

}
