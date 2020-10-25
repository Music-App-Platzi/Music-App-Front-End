import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormUserComponent } from './components/form-user/form-user.component';

@NgModule({
  declarations: [
    NavComponent,
    UsersListComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
