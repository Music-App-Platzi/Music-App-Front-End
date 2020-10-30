import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { MaterialModule } from './../material/material.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
