import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  name: any = "";

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((qParams) => {
      console.log('qParams::', qParams);
      this.name = qParams.get('name');

    });
  }

}
