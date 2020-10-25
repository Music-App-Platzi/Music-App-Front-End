import { Component, OnInit } from '@angular/core';

import { UserResponse } from './../../../models/users.model';
import { UsersService } from './../../../core/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: UserResponse;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.allUsers();
  }

  allUsers(): void{
    this.usersService.allUsers()
    .subscribe( users => {
      this.users = users;
    });
  }
  delateUser(id: UserResponse): void{
    this.usersService.delateUser(id)
    .subscribe( res => {
      console.log(res);
      this.allUsers();
    });
  }
}
