import { Component, OnInit } from '@angular/core';

import { LoginResponse } from './../../../models/auth.model';

import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: LoginResponse;

  navActive = false;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  signOff(): void{
    sessionStorage.clear();
    this.user = null;
    this.route.navigate(['/home']);
  }

}
