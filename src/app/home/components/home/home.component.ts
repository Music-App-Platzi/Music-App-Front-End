import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: string[] = [
    'assets/img__carrousel/banner-1.jpg',
    'assets/img__carrousel/banner-2.jpg',
    'assets/img__carrousel/banner-3.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
