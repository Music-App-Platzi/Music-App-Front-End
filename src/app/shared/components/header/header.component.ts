import { Component, OnInit, HostListener } from '@angular/core';

import { LoginResponse } from './../../../models/auth.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toShow: any;
  user: LoginResponse;
  installEvent = null;

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


  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(): void{
    if (this.installEvent){
      this.installEvent.prompt();
      this.installEvent.userChoice
      .then(() => {
      });
    }
  }

}
