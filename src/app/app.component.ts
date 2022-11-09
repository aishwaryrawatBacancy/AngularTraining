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

  /*
    1. Dropdown Directive - Add Class "show" in the header component dropdown.
    2. prepare ngSwitch
  */
  menuText: string = 'Home';
  removeHeader: boolean = true;
  showHome = false;

  constructor(private shareDataService: ShareDataService){}

  changeText(){
    this.menuText = "About";
    this.removeHeader = false;
  }

  menuChange(menu: string){
    if(menu === 'home'){
      this.showHome = true;
      // this.shareDataService.getPosts().subscribe(data => {
      //   if(data){
      //     this.shareDataService.userPosts = data;
      //   }
      // });
    }
    else{
      this.showHome = false;
    }
  }


  ngAfterContentChecked(){
    console.log(this.shareDataService.selectedMenu)
    this.menuChange(this.shareDataService.selectedMenu)
  }
  //unless directive - structural directive - 
}
