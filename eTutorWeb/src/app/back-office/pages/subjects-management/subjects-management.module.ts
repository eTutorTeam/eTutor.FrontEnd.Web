import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import {SharedModule} from '../../../shared/shared.module';
import {NgxLoadingModule} from 'ngx-loading';
import {MaterialModule} from '../../../shared/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: SubjectsListComponent
  },
];

@NgModule({
  declarations: [SubjectsListComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      RouterModule.forChild(routes),
      NgxLoadingModule,
      MaterialModule
  ]
})
export class SubjectsManagementModule { }
