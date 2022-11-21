import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { PostService } from './services/post.service';
import { ShareDataService } from './shared/services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit{
  title = 'angular-training-app';

  menuText: string = 'Home';
  removeHeader: boolean = true;
  showHome = false;
  posts:any;

  constructor(private postService: PostService){}

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
  
  ngOnInit(): void {
    this.postService.getPosts().subscribe(response =>( this.posts = response));
  }
}
