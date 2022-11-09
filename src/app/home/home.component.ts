import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';

export interface PostInterface {
  title: String,
  content: String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ShareDataService]
})
export class HomeComponent implements OnInit {

  public posts:PostInterface[] = [
    {title: 'Card First', content:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    {title: 'Card Second', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
  ];
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
  }

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Home component", this.shareDataService.count);
  }
}
