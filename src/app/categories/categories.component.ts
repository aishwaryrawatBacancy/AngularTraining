import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivate } from '../guards/auth-can-deactivate.guard';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, IDeactivate {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Fragment:::', this.route.snapshot.fragment);
  }

  canExit(): boolean {
    if (confirm("are you sure")) {
      return true;
    } else {
      return false;
    }
  }
}
