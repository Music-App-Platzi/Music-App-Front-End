import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { SongsResponse, SongResponse } from './../models/music.model';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private songs: SongResponse;
  private sonsg = new BehaviorSubject<SongResponse>(null);

  song$ = this.sonsg.asObservable();

  constructor() { }

  playSong(song: SongResponse): void{
    this.songs = song;
    this.sonsg.next(this.songs);
  }
}
