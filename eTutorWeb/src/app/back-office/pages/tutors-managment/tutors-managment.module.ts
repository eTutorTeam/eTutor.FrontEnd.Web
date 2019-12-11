import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { UnregisteredTutorsComponent } from './unregistered-tutors/unregistered-tutors.component';
import { TutorsListComponent } from './tutors-list/tutors-list.component';
import {NgxLoadingModule} from 'ngx-loading';
import {NgxMaskModule} from 'ngx-mask';
import { TutorsTableComponent } from './tutors-list/tutors-table/tutors-table.component';
import {NzPopconfirmModule, NzPopoverModule, NzTableModule} from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    component: TutorsListComponent
  }
];

@NgModule({
  declarations: [UnregisteredTutorsComponent, TutorsListComponent, TutorsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxLoadingModule,
    NgxMaskModule.forChild(),
      NzTableModule,
      NzPopconfirmModule,
      NzPopoverModule
  ]
})
export class TutorsManagmentModule { }
