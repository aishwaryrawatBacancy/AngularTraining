import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {

  public count: number = 0;


  constructor() {
  }

  updateCount() {
    this.count++;
  }
}
