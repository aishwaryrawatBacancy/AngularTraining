import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
} from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {
  @Input() menu: string = '';
  @Output() menuChangeEmitter = new EventEmitter<string>();

  constructor(private shareDataService: ShareDataService) {}

  // ngOnChanges(){
  //   //Whenever there is any change in the Input Bound Properties of the Component.
  //   console.log("On Changes Hook", this.menu);
  // }

  ngOnInit(): void {
    //Only executed 1 time when the component is loaded.
    console.log('On Init Hook', this.menu);
  }

  menuChange(menu: string) {
    this.menuChangeEmitter.emit(menu);
    this.shareDataService.selectedMenu = menu;
  }

  updateCount() {
    this.shareDataService.updateCount();
    console.log('Header Component', this.shareDataService.count);
  }
  // ngDoCheck(){
  //   //only for debugging:
  //   console.log("Do Check hook")
  // }

  // ngAfterContentInit(){
  //   console.log("After Content Init", this.menu);
  // }

  // ngAfterContentChecked(){
  //   console.log("After Cpntent Checked", this.menu);
  // }

  // ngAfterViewInit(){
  //   console.log("After View Init", this.menu);
  // }

  // ngAfterViewChecked(){
  //  console.log("After View Checked", this.menu);
  // }

  // ngOnDestroy(){
  //   console.log("Destroy");
  // }
}

/*
  1. Components - Directives with a template - HTML Template.
  2. Input Output Databinding
  3. Encapsulation
  4. Template Ref
  5. Directives
  6. content projection
  7. lifecycle hooks - ?
*/
