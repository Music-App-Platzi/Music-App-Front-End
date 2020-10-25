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

  imagesCarousel: string[] = [
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
    'assets/img__carrousel/image_carousel.jpg',
  ];


  users = [
    {
      id: '1',
      song: 'Dame Dame',
      artist: 'Claydee feat',
      thumbnail: '👍🏻',
    },
    {
      id: '2',
      song: 'Kamelia',
      artist: 'DDY Numes',
      thumbnail: '👍🏻',
    },
    {
      id: '3',
      song: 'Laught Till You Cry',
      artist: 'Faydee',
      thumbnail: '👍🏻',
    },
    {
      id: '4',
      song: 'I dont know',
      artist: 'Deejay Fly',
      thumbnail: '👍🏻',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
