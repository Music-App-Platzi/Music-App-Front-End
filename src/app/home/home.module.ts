import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './../shared/shared.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SongsComponent } from './components/songs/songs.component';

@NgModule({
  declarations: [
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent,
    SongsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
