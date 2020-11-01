import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import {
  ArtistsResponse,
  AlbumsResponse,
  SongsResponse,
  SongResponse,
  LikeSong
} from './../models/music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private http: HttpClient
  ) { }

  // ARTISTS
    allArtists(): Observable<ArtistsResponse>{
      return this.http.get<ArtistsResponse>(`${environment.api}artists`);
    }
    getArtist(id): Observable<ArtistsResponse>{
      return this.http.get<ArtistsResponse>(`${environment.api}artists/${id}`);
    }
    delateArtist(id: ArtistsResponse): Observable<ArtistsResponse>{
      return this.http.delete<ArtistsResponse>(`${environment.api}artists/${id}`);
    }
    updateArtist(id: number, changes: Partial<ArtistsResponse>): Observable<ArtistsResponse>{
       return this.http.put<AlbumsResponse>(`${environment.api}playlists/${id}`, changes);
    }

  //ALBUMS
    allAlbums(): Observable<AlbumsResponse>{
      return this.http.get<AlbumsResponse>(`${environment.api}albums`);
    }
    getAlbum(id): Observable<AlbumsResponse>{
      return this.http.get<AlbumsResponse>(`${environment.api}albums/${id}`);
    }
    updateAlbum(id: number, changes: Partial<AlbumsResponse>): Observable<AlbumsResponse>{
      return this.http.put<AlbumsResponse>(`${environment.api}albums/${id}`, changes);
    }
    delateAlbum(id: AlbumsResponse): Observable<AlbumsResponse>{
      return this.http.delete<AlbumsResponse>(`${environment.api}albums/${id}`);
    }

    //SONGS
    allSongs(): Observable<SongsResponse>{
      return this.http.get<SongsResponse>(`${environment.api}songs`);
    }
    getSong(id: SongsResponse): Observable<SongResponse>{
      return this.http.get<SongResponse>(`${environment.api}songs/${id}`);
    }
    //Sonds Heards
    likeSong(id): Observable<LikeSong>{
      const data = id;
      return this.http.post<LikeSong>(`${environment.api}songs-heards`, data);
    }
}
