import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  songs = [
    {
      id: '1',
      album_id: '1',
      name: 'name 1',
      duration: '3.15 s',
      song_link: 'adasdasdas.COM',
      thumbnail: 'imagen',
      popularity: 15,
      genre: 'gense 3'
    },
    {
      id: '2',
      album_id: '2',
      name: 'name 2',
      duration: '3.21 s',
      song_link: 'adasdasdas.COM',
      thumbnail: 'imagen',
      popularity: 11,
      genre: 'gense 2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
