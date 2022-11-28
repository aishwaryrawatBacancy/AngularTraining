import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareDataService } from './shared/services/share-data.service';
import { SubjectService } from './shared/services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShareDataService]
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'angular-training-app';

  menuText: string = 'Home';
  removeHeader: boolean = true;
  showHome = false;

  footerShow = false;
  private showSubscription: Subscription;

  constructor(private shareDataService: ShareDataService, private subjectService: SubjectService){}

  ngOnInit(): void {
    this.showSubscription = this.subjectService.showEmitter.subscribe( didshow => {
      this.footerShow = didshow;
    } )
  }

  ngOnDestroy(): void {
    this.showSubscription.unsubscribe();
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


  ngAfterViewChecked(){
    // console.log('selectecdMenu : ',this.shareDataService.selectedMenu)
    this.menuChange(this.shareDataService.selectedMenu)
  }

  ngAfterContentChecked(){
    // console.log('selectecdMenu content check: ',this.shareDataService.selectedMenu)
    this.menuChange(this.shareDataService.selectedMenu)
  }
  //unless directive - structural directive - 
}
