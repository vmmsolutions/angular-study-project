import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataDropDown } from 'src/app/models/dataDropDown';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = {
    id: '1',
    firstName: 'Vitor Mendonca',
    lastName: 'Mendonca',
    gender: 1,
    email: ''
  };

  selectedData!: DataDropDown;
  options$: any;
  users: any;

  constructor(private _alertService: AlertService
    , private _userService: UserService) { }

  ngOnInit(): void {
    this.dropDown();
    this.options$ = this._userService.getUsers();
    this.users = ['Vitor', 'Olivia', 'Noah'];
    this.options$ = of(this.users);

    new Observable(observer => {
      setTimeout(() => {
        observer.next('In Progress');
      },2000);
      setTimeout(() => {
        observer.next('Pending');
      },3000);
      setTimeout(() => {
        observer.next('Completed');
      },4000);
    }).subscribe(data => {
      this.users = data;
    },error => {
    });
  }

  dropDown() {
    this.selectedData = { title: 'Select Gender', items: this._userService.getAll() }
  }

  successSnackBar() {
    this._alertService.success();
  }

  infoSnackBar() {
    this._alertService.info();
  }

  errorSnackBar() {
    this._alertService.error();
  }

}
