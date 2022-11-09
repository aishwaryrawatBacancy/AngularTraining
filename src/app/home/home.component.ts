import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [ShareDataService]
})
export class HomeComponent implements OnInit {

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
  }

  public posts: Array<{ title: string, description: string}> = [
    {
      title: "ABC",
      description: "aoj jsiodjf0e isadf ij aijf0ew ij a0jf0 ijaidjf 0ajd0e"
    },
    {
      title: "XYZ",
      description: "jsiodjf0e isadf ij aijf0ew ij a0jf0 ijaidjf 0ajd0e"
    },
    {
      title: "PQR",
      description: "isadf ij aijf0ew ij a0jf0 ijaidjf 0ajd0e"
    },
  ]

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Home component", this.shareDataService.count);
  }

  goToDetails(postObj: any): void{
    this.shareDataService.selectedMenu = 'explore';
    this.shareDataService.detailPost = postObj;
  }
}