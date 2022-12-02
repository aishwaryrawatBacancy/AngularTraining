import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpResponse } from './shared/models/users.model';
import { AuthService } from './shared/services/auth.service';
import { ShareDataService } from './shared/services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-training-app';

  menuText: string = 'Home';
  removeHeader: boolean = true;
  showHome = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    const userStorage = localStorage.getItem('angularTraining')

    if(userStorage){
      const user: SignUpResponse = JSON.parse(userStorage);
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['explore'])
    }
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
