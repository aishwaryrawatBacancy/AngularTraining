import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ShareDataService]
})
export class HomeComponent implements OnInit {

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
  }

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Home component", this.shareDataService.count);
  }
}