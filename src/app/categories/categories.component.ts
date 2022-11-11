import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivate } from '../guards/auth-can-deactivate.guard';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, IDeactivate {
  categories: { id: number, name: string }[] = [];
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    // this.route.data.subscribe((data) => {
    //   console.log(data)
    // })
    // this.categories = this.categoryService.categories;

    this.route.data.subscribe((data) => {
      console.log(data)
      this.categories = data['categories']
    })
  }

  canExit(): boolean {
    if (confirm("are you sure")) {
      return true;
    } else {
      return false;
    }
  }
}
