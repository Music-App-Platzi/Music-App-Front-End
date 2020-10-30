import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangingPageComponent } from './langing-page/langing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LangingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
