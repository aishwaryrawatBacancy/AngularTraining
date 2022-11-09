import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';
import { CommonServices } from '../common.serivce';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  providers: [ShareDataService],
})
export class ExploreComponent implements OnInit {
  exploreContent: { title: string; text: string }[] = [];
  constructor(
    private shareDataService: ShareDataService,
    private commonService: CommonServices
  ) {}

  ngOnInit(): void {
    console.log('User Posts', this.shareDataService.userPosts);
    this.exploreContent = this.commonService.exploreContent;
  }
}
