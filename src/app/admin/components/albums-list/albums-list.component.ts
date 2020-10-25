import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  albums = [
    {
      id: '1',
      artist_id: '1',
      name: 'album 1',
      release_date: '12-12-2012'
    },
    {
      id: '2',
      artist_id: '2',
      name: 'albun 2',
      release_date: '12-12-2012'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
