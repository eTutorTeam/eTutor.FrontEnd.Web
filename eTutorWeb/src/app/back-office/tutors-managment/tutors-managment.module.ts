import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { UnregisteredTutorsComponent } from './unregistered-tutors/unregistered-tutors.component';

const routes: Routes = [
  {
    path: '',
    component: UnregisteredTutorsComponent
  }
];

@NgModule({
  declarations: [UnregisteredTutorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TutorsManagmentModule { }
