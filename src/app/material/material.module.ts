import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  exports: [
    MatProgressBarModule,
  ]
})
export class MaterialModule { }
