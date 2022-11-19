import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';
import { cardData } from './post-card-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private shareDataService: ShareDataService) {}

  public carddata: cardData[] = [
    new cardData('Card 1', 'Description 1'),
    new cardData('Card 2', 'Description 2'),
    new cardData('Card 3', 'Description 3'),
    new cardData('Card 4', 'Description 4'),
    new cardData('Card 5', 'Description 5'),
  ];

  ngOnInit(): void {}

  updateCount() {
    this.shareDataService.updateCount();
    // console.log('Home component', this.shareDataService.count);
  }

  cardDetailDisplay(carddata: any) {
    this.shareDataService.cardDetail = carddata;
    // this.shareDataService.selectedMenu = 'explore';
  }
}
