import { Component, OnInit } from '@angular/core';

import { LoginResponse } from './../../../models/auth.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toShow: any;
  userInfo: LoginResponse;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    const user: any = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);
    if (user){
      this.userInfo = user.userInfo;
    }
  }

  signOff(): void{
    sessionStorage.clear();
    this.userInfo = null;
    this.route.navigate(['/home']);
  }

}
