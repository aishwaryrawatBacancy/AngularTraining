import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText: string = "";

  fruits: String[] = ['Orange', 'Apple', 'Mango', 'Banana', 'Grapes', 'Pineapple', 'Peach' ];

  addFruit(): void {
    this.fruits.push("Guava");
  }

}
