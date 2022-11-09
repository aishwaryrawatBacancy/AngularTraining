import { Injectable } from '@angular/core';

@Injectable()
export class PostDataServices {
  count = 0;
  updateCount(){
    this.count+=1;
  }
}
