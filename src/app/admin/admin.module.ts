import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { FormArtistComponent } from './components/form-artist/form-artist.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { FormAlbumComponent } from './components/form-album/form-album.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { FormSongComponent } from './components/form-song/form-song.component';

@NgModule({
  declarations: [
    NavComponent,
    UsersListComponent,
    FormUserComponent,
    ArtistListComponent,
    FormArtistComponent,
    AlbumsListComponent,
    FormAlbumComponent,
    SongsListComponent,
    FormSongComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
