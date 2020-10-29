import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void{
    console.log('logout');
  }

}
