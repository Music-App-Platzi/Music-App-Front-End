import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './../shared/shared.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/shared/pipes/filter/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FilterPipe
  ]
})
export class HomeModule { }
