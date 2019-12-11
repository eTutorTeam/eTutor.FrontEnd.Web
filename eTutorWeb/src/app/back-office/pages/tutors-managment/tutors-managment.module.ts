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
import {NzModalModule, NzPopconfirmModule, NzPopoverModule, NzTableModule} from 'ng-zorro-antd';
import { TutorsModalComponent } from './tutors-list/tutors-table/tutors-modal/tutors-modal.component';
// tslint:disable-next-line:max-line-length
import { TutorSubjectAssignationComponent } from './tutors-list/tutors-table/tutors-modal/tutor-subject-assignation/tutor-subject-assignation.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgxSpinnerModule} from 'ngx-spinner';

const routes: Routes = [
  {
    path: '',
    component: TutorsListComponent
  }
];

@NgModule({
  declarations: [
    UnregisteredTutorsComponent,
    TutorsListComponent,
    TutorsTableComponent,
    TutorsModalComponent,
    TutorSubjectAssignationComponent],
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
    NzPopoverModule,
    NzModalModule,
    DragDropModule,
    NgxSpinnerModule
  ]
})
export class TutorsManagmentModule { }
