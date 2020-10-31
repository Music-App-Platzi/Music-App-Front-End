import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';

import { MusicService } from './../../../core/music.service';
import { PlayService } from './../../../core/play.service';
import { SongsResponse, SongResponse } from './../../../models/music.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputFilter = new FormControl('');

  filterSong = '';

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
    this.musicService.getSong(songs)
    .subscribe ( songs => {
      this.playService.playSong(songs);
    });
  }

}
