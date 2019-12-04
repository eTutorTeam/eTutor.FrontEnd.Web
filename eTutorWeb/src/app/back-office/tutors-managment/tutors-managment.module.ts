import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { UnregisteredTutorsComponent } from './unregistered-tutors/unregistered-tutors.component';
import { TutorsValidationComponent } from './tutors-validation/tutors-validation.component';
import {NgxLoadingModule} from 'ngx-loading';

const routes: Routes = [
  {
    path: '',
    component: TutorsValidationComponent
  }
];

@NgModule({
  declarations: [UnregisteredTutorsComponent, TutorsValidationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxLoadingModule
  ]
})
export class TutorsManagmentModule { }
