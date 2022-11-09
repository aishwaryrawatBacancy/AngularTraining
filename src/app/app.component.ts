import { CommonServices } from './common.serivce';
import { Component, Input } from '@angular/core';
import { ShareDataService } from './shared/services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-training-app';

  menuText: string = 'Home';
  removeHeader: boolean = true;

  @Input() showHome = this.commonServices.showHome;

  constructor(private commonServices: CommonServices) {}

  changeText() {
    this.menuText = 'About';
    this.removeHeader = false;
  }

  menuChange(menu: string) {
    if (menu === 'home') {
      this.showHome = true;
      // this.shareDataService.getPosts().subscribe(data => {
      //   if(data){
      //     this.shareDataService.userPosts = data;
      //   }
      // });
    } else {
      this.showHome = false;
    }
  }

  // ngAfterViewChecked(){
  //   console.log(this.shareDataService.selectedMenu)
  //   this.menuChange(this.shareDataService.selectedMenu)
  // }
  //unless directive - structural directive -
}
