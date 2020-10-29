import { Component, OnInit } from '@angular/core';

import { MusicService } from './../../../core/music.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  songs;
  currentSong;
  newTime;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
  }
   song(): void{
     this.musicService.allSongs()
     .subscribe( songs => {
       this.songs = songs;
     });
   }

  play(): void{
    this.currentSong = new Audio ('https://s3-us-east-2.amazonaws.com/music-app-platzi-music/2.mp3');
    this.currentSong.addEventListener('timeupdate', () => {
      this.newTime = (this.currentSong.currentTime * (this.currentSong.duration /10))/100;
    });
    this.currentSong.play();
  }
  pause(): void{
    this.currentSong.pause();
  }
}
