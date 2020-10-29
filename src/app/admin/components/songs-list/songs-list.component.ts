import { Component, OnInit } from '@angular/core';

import { MusicService } from './../../../core/music.service';
import { SongsResponse } from './../../../models/music.model';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  songs: SongsResponse;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.allSongs();
  }

  allSongs(): void{
    this.musicService.allSongs()
    .subscribe(songs => {
      console.log(songs);
      this.songs = songs;
    });
  }
}
