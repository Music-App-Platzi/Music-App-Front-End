import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormUserComponent } from './components/form-user/form-user.component';

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
        component: UsersListComponent
      },
      {
        path: 'albums',
        component: UsersListComponent
      },
      {
        path: 'songs',
        component: UsersListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
