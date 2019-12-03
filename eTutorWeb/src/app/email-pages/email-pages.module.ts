import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesLayoutComponent} from '../pages/pages-layout/pages-layout.component';
import { ParentRegistrationFormComponent } from './parent-registration-form/parent-registration-form.component';
import { EmailPagesLayoutComponent } from './email-pages-layout/email-pages-layout.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmailPagesLayoutComponent,
    children: [
      {
        path: 'parent-registration',
        component: ParentRegistrationFormComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    ParentRegistrationFormComponent,
    EmailPagesLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmailPagesModule { }
