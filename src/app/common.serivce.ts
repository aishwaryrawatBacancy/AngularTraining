import { Injectable } from '@angular/core';

@Injectable()
export class CommonServices {
  showHome = false
   
  exploreContent: { title: string; text: string }[] = [];

  addContent(title: string) {
    this.exploreContent.push({ title: title+' child', text: "I'm a child component"});
    this.showHome = !this.showHome
  }
}