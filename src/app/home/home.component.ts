import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';
import { DataServices } from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ShareDataService, DataServices],
})
export class HomeComponent implements OnInit {
  cards: { title: string; text: string }[] = [];

  constructor(
    private shareDataService: ShareDataService,
    private dataService: DataServices
  ) {}

  ngOnInit(): void {
    console.log(this.dataService.cards);
    this.cards = this.dataService.cards;
  }

  updateCount() {
    this.shareDataService.updateCount();
    console.log('Home component', this.shareDataService.count);
  }
}
