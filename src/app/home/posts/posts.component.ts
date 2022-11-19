import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShareDataService } from 'src/app/shared/services/share-data.service';
import { cardData } from '../post-card-data';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [ShareDataService],
})
export class PostsComponent implements OnInit {
  @Input() cardDataSel: cardData = {
    title: '1',
    description: '2',
  };
  @Output() viewCardDetail = new EventEmitter();

  constructor(public shareDataService: ShareDataService) {}

  ngOnInit(): void {}

  updateCount() {
    this.shareDataService.updateCount();
    console.log('Post Component 1', this.shareDataService.count);
  }

  viewDetails() {
    this.viewCardDetail.emit(this.cardDataSel);
  }
}
