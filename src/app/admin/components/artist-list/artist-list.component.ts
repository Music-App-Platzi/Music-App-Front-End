import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artist = [
    {
      id: '1',
      name: 'nombre 1',
    },
    {
      id: '2',
      name: 'nombre 2',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
