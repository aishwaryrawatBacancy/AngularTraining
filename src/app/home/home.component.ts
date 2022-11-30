import { Component, OnInit, ElementRef, EventEmitter, Output,PipeTransform,Pipe } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit(): void {
  }
  title = 'Dropdown';
  public dropdownOpen: boolean = false;
  public get dropdownElement(): Element {return this.elem.nativeElement.querySelector('.dropdown-list')}

  public currentValue:any;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
  }

  onSubmitTemplateBased(){
    
  }



  today: number = Date.now();     

}

// @NgModule({
//   declarations: [HomeComponent],
//   imports: [BrowserModule, FormsModule],
//   // bootstrap: [App]
// })