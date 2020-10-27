import { Component, OnInit } from '@angular/core';

import { MusicService } from './../../../core/music.service';
import { AlbumsResponse } from './../../../models/music.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  albums: AlbumsResponse;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.allAlbums();
  }

  allAlbums(): void{
    this.musicService.allAlbums()
    .subscribe(albums => {
      this.albums = albums;
    });
  }
  delateAlbum(id: AlbumsResponse): void{
    this.musicService.delateAlbum(id)
    .subscribe(res => {
      console.log(res);
      this.allAlbums();
    })
  }
}
