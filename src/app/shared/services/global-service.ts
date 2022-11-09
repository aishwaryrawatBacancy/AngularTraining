import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public showHome: boolean = true;
  public showHomeChange: Subject<any> = new Subject<any>();

  constructor() {
    this.showHomeChange.subscribe((value: any) => {
      this.showHome = value;
    });
  }

  navigateTab(data: any) {
    data.isHomeVisible = !this.showHome;
    this.showHomeChange.next(data);
    // console.log(this.showHome);
  }

}
