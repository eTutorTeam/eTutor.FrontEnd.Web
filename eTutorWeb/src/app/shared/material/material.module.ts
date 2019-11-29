import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
