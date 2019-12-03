import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {PagesLayoutComponent} from '../pages/pages-layout/pages-layout.component';
import {ParentRegistrationFormComponent} from './parent-registration-form/parent-registration-form.component';


const routes: Routes = [
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      {
        path: '/parent-activation',
        component: ParentRegistrationFormComponent
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmailPagesRoutingModule { }
