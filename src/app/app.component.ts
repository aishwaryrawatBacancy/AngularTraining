import {Component, OnInit} from '@angular/core';
import { ShareDataService } from './shared/services/share-data.service';
import {CounterService} from "./shared/services/counter.service";
import {GlobalService} from "./shared/services/global-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'angular-training-app';

  menuText: string = 'Home';
  removeHeader: boolean = true;
  showHome = false;

  constructor(private globalService: GlobalService, private router: Router){
    globalService.showHomeChange.subscribe((value) => {
      console.log(value);
      this.showHome = value.isHomeVisible;
    });
  }

  ngOnInit(): void {
    this.showHome = this.globalService.showHome;
  }

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



  // ngAfterViewChecked(){
  //   console.log(this.shareDataService.selectedMenu)
  //   this.menuChange(this.shareDataService.selectedMenu)
  // }
  //unless directive - structural directive -
}
