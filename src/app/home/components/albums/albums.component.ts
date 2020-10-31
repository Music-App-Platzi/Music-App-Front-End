import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  imagesAlbums: string[] = [
    'assets/img__carrousel/kamelia.jpg',
    'assets/img__carrousel/faydee.jpg',
    'assets/img__carrousel/carly.jpg',
    'assets/img__carrousel/jonasBrothers.jpg',
    'assets/img__carrousel/bilionera.jpg',
    'assets/img__carrousel/edSheeran.jpg',
    'assets/img__carrousel/lilNas.jpg',
    'assets/img__carrousel/drake.jpg',
    'assets/img__carrousel/faydeedj.jpg',
    'assets/img__carrousel/carly.jpg',
    'assets/img__carrousel/faydee.jpg',
  ];

  users = [
    {
      id: '1',
      song: 'Dame Dame',
      artist: 'DDY Numes',
      thumbnail: '👍🏻',
      views: '42,822',
      time_song: '3:21'
    },
    {
      id: '2',
      song: 'Kamelia',
      artist: 'DDY Numes',
      thumbnail: '👍🏻',
      views: '67,420',
      time_song: '3:30'
    },
    {
      id: '3',
      song: 'Laught Till You Cry',
      artist: 'DDY Numes',
      thumbnail: '👍🏻',
      views: '38,556',
      time_song: '3:56'
    },
    {
      id: '4',
      song: 'I dont know',
      artist: 'DDY Numes',
      thumbnail: '👍🏻',
      views: '35,820',
      time_song: '3:30'
    },
    {
      id: '5',
      song: 'I am Sorry feat Sandra',
      artist: 'DDY Numes',
      thumbnail: '👍🏻',
      views: '51,432',
      time_song: '4:01'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
