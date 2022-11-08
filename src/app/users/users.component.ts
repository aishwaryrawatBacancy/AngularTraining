import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public usersArray = [
    {
      id: 1,
      name: 'Abc'
    },
    {
      id: 2,
      name: 'Test'
    },
    {
      id: 3,
      name: 'XYZ'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
