import { Component, OnInit } from '@angular/core';

import { LoginResponse } from './../../../models/auth.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: LoginResponse;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    let userData: any = sessionStorage.getItem('user');
    userData = JSON.parse(userData);
    if (userData){
      this.user = userData.user;
    }
  }

  signOff(): void{
    sessionStorage.clear();
    this.user = null;
    this.route.navigate(['/home']);
  }

}
