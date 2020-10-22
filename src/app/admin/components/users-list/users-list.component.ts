import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users = [
    {
      id: '1',
      rol_id: '1',
      username: 'steward',
      name: 'johan',
      mail: 'asd@asd.asd',
      password: 'asd132***',
      thumbnail: 'imagen',
    },
    {
      id: '2',
      rol_id: '2',
      username: 'camilo',
      name: 'camilo',
      mail: 'camilo@asd.asd',
      password: 'asd132***',
      thumbnail: 'imagen',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
