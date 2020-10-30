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
    this.currentSong = new Audio ('https://s3-us-east-2.amazonaws.com/music-app-platzi-music/185.mp3');
    this.currentSong.addEventListener('timeupdate', () => {
        this.newTime = (this.currentSong.currentTime * (this.currentSong.duration /10))/ 48;
    });
    this.currentSong.play();
  }
  pause(): void{
    this.currentSong.pause();
  }
  parseTime(time= '01:00'): any{
    if (time) {
      const partTime = parseInt(time.toString().split('.')[0], 10);
      let minutes = Math.floor(partTime/60).toString();
      if (minutes.length === 1){
        minutes = '0' + minutes;
      }
      let seconds = (partTime % 60).toString();
      if (seconds.length === 1) {
        seconds = '0' + seconds;
      }
      return minutes + ':' + seconds;
    }
  }
}
