import { Component, OnInit } from '@angular/core';

import { MusicService } from './../../../core/music.service';
import { SongsResponse } from './../../../models/music.model';

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

  songs: SongsResponse;

  constructor(
    private musicService: MusicService,
  ) { }

  ngOnInit(): void {
    this.allSongs();
  }
  allSongs(): void{
    this.musicService.allSongs()
    .subscribe( songs => {
      this.songs = songs;
    });
  }

}
