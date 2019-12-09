import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule, MatTableModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
