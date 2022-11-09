import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Query parameters
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];

    // from routing file.
    this.route.params.subscribe((params) => {
      console.log('params:::', params);
      this.id = params['id'];
      this.name = params['name'];
    });
  }

  onEditUser() {
    this.router.navigate(['/users', this.id, this.name, 'edit'], {queryParamsHandling: 'preserve'});
  }

}
