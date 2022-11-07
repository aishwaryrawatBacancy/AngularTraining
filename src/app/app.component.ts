import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
  changeText(){
    this.menuText = "About";
    this.removeHeader = false;
  }

  menuChange(menu: string){
    if(menu === 'home'){
      this.showHome = true;
    }
    else{
      this.showHome = false;
    }
  }

  //unless directive - structural directive - 
}
