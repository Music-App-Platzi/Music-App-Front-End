import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { UserGuard } from './utils/user.guard';
import { AdminGuard } from './utils/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        canActivate: [UserGuard],
        loadChildren: () => import ('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'landing-page',
        loadChildren: () => import ('./landing-page/landing-page.module').then(m => m.LandingPageModule)
      },
  ]
  },
  {
    path: '',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import ('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules, useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
