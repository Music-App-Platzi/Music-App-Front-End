import { Component, OnInit } from '@angular/core';

import { MusicService } from './../../../core/music.service';
import { ArtistsResponse } from './../../../models/music.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: ArtistsResponse;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.allArtists();
  }

  allArtists(): void{
    this.musicService.allArtists()
    .subscribe ( artists => {
      this.artists = artists;
    });
  }
  delateArtist(id): void{
    this.musicService.delateArtist(id)
    .subscribe(res => {
      console.log(res);
      this.allArtists();
    })
  }

}
