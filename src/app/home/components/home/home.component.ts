import { Component, OnInit } from '@angular/core';

import { MusicService } from './../../../core/music.service';
import { PlayService } from './../../../core/play.service';
import { SongsResponse } from './../../../models/music.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: string[] = [
    'assets/img__carrousel/soundMusic.jpg',
    'assets/img__carrousel/listenMusic.jpg',
    'assets/img__carrousel/soundMusicBlack.jpg',
    'assets/img__carrousel/listenNow.jpg',

  ];

  songs: SongsResponse;

  constructor(
    private musicService: MusicService,
    private playService: PlayService
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
  playSong(songs: SongsResponse): void {
    this.playService.playSong(this.songs);
    this.musicService.getSong(songs)
    .subscribe (songs => {
      console.log(songs);
    });
  }

}
