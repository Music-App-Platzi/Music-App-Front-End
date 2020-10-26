import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistsComponent } from './components/artists/artists.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    AlbumsComponent,
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
