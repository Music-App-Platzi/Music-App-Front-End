import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { SongsResponse } from './../models/music.model';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private songs: SongsResponse[] = [];
  private sonsg = new BehaviorSubject<SongsResponse[]>([]);

  song$ = this.sonsg.asObservable();

  constructor() { }

  playSong(song: SongsResponse): void{
    this.songs = [...this.songs, song];
    this.sonsg.next(this.songs);
  }
}
