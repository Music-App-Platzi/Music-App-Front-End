import { Component, OnInit } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Music-App';

constructor(
  private swUpdate: SwUpdate
) {}
ngOnInit(): void{
  this.upDatePWA();
}
  upDatePWA(): void{
    this.swUpdate.available
    .subscribe(() => {
      window.location.reload();
    });
  }
}
