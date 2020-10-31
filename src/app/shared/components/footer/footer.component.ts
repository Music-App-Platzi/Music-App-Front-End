import { Component, OnInit } from '@angular/core';

import { MusicService } from './../../../core/music.service';
import { PlayService } from './../../../core/play.service';
import { SongsResponse, SongResponse } from './../../../models/music.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  songs;
  currentSong: HTMLAudioElement;
  newTime;
  sonsg: SongResponse;

  constructor(
    private musicService: MusicService,
    private playService: PlayService
  ) {
    this.playService.song$.subscribe(song => {
      this.sonsg = song;
    });
  }

  ngOnInit(): void {
  }
   song(): void{
     this.musicService.allSongs()
     .subscribe( songs => {
       this.songs = songs;
     });
   }


  play(): void{
    console.log(this.sonsg.data);
    this.currentSong = new Audio (this.sonsg.data.song_link);
    console.log(this.play);
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
