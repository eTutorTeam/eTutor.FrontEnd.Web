import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatIconModule, MatPaginatorModule, MatTableModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
      MatDialogModule,
      MatIconModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
      MatDialogModule,
      MatIconModule
  ]
})
export class MaterialModule { }
