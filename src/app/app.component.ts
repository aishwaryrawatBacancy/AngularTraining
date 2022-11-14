import { Component } from '@angular/core';
import { ShareDataService } from './shared/services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShareDataService]
})
export class AppComponent {
  title = 'angular-training-app';

  menuText: string = 'Home';
  removeHeader: boolean = true;
  showHome = false;

  constructor(private shareDataService: ShareDataService){}

  changeText(){
    this.menuText = "About";
    this.removeHeader = false;
  }


  ngAfterContentChecked(){
    // console.log(this.shareDataService.selectedMenu)
    // this.menuChange(this.shareDataService.selectedMenu)
  }
  //unless directive - structural directive - 
}
