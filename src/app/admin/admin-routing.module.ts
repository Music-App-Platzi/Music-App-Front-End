import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { FormArtistComponent } from './components/form-artist/form-artist.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { FormAlbumComponent } from './components/form-album/form-album.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { FormSongComponent } from './components/form-song/form-song.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'users',
        component: UsersListComponent
      },
      {
        path: 'users/create',
        component: FormUserComponent
      },
      {
        path: 'users/edit/:id',
        component: FormUserComponent
      },
      {
        path: 'artist',
        component: ArtistListComponent
      },
      {
        path: 'artist/edit/:id',
        component: FormArtistComponent
      },
      {
        path: 'albums',
        component: AlbumsListComponent
      },
      {
        path: 'albums/edit/:id',
        component: FormAlbumComponent
      },
      {
        path: 'songs',
        component: SongsListComponent
      },
      {
        path: 'songs/edit/:id',
        component: FormSongComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
