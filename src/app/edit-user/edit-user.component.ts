import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivate } from '../guards/auth-can-deactivate.guard';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, IDeactivate {

  userDetails: { id: string, name: string } = {
    id: '',
    name: ''
  }

  editUserDetails = this.userDetails;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((qParams) => {
      console.log('qParams::', qParams);
      this.userDetails = {
        id: qParams['id'],
        name: qParams['name']
      };

      this.editUserDetails = { ...this.userDetails };
    });
  }

  canExit(): boolean {
    if (this.userDetails.id != this.editUserDetails.id || this.userDetails.name != this.editUserDetails.name) {
      if (confirm("All changes will get lost if you leave this page!!")) {
        return true
      }
      return false;
    }
    return false;
  }
}
