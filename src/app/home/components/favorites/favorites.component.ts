import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  imagesFavorites: string[] = [
    'assets/img__carrousel/jonasBrothers.jpg',
    'assets/img__carrousel/faydee.jpg',
    'assets/img__carrousel/faydeedj.jpg',
    'assets/img__carrousel/bilionera.jpg',
    'assets/img__carrousel/edSheeran.jpg',
    'assets/img__carrousel/kamelia.jpg',
    'assets/img__carrousel/lilNas.jpg',
    'assets/img__carrousel/drake.jpg',
    'assets/img__carrousel/faydee.jpg',
    'assets/img__carrousel/carly.jpg',

  ];

  users = [
    {
      id: '1',
      song: 'Sucker',
      artist: 'Jonas Brothers',
      thumbnail: '👍🏻',
      views: '98,954',
      time_song: '3:20'
    },
    {
      id: '2',
      song: 'Locked Out Of Heaven',
      artist: 'Bruno Mars',
      thumbnail: '👍🏻',
      views: '75,920',
      time_song: '3:54'
    },
    {
      id: '3',
      song: 'Treat You Better',
      artist: 'Shawn Mendes',
      thumbnail: '👍🏻',
      views: '54,832',
      time_song: '4:16'
    },
    {
      id: '4',
      song: 'I am Not The Only One',
      artist: 'Sam Smith',
      thumbnail: '👍🏻',
      views: '51,432',
      time_song: '4:39'
    },
    {
      id: '5',
      song: 'Middle ft. Bipolar Sunshine',
      artist: 'DJ Snake',
      thumbnail: '👍🏻',
      views: '35,820',
      time_song: '5:00'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
