import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddCategory(): void {
    // this.router.navigateByUrl('/categories')
    this.router.navigate(['/categories'], {
      queryParams: { q: '1234', name: 'abc', search: 'query' },
      fragment: 'loading'
    })
  }

}
