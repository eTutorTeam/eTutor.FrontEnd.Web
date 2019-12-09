import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesLayoutComponent} from '../pages/pages-layout/pages-layout.component';
import { ParentRegistrationFormComponent } from './parent-registration-form/parent-registration-form.component';
import { EmailPagesLayoutComponent } from './email-pages-layout/email-pages-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import {NgxLoadingModule} from 'ngx-loading';
import { ParentRegistrationSuccessfulComponent } from './parent-registration-successful/parent-registration-successful.component';

const routes: Routes = [
  {
    path: '',
    component: EmailPagesLayoutComponent,
    children: [
      {
        path: 'parent-registration',
        component: ParentRegistrationFormComponent
      },
      {
        path: 'parent-registration-successful',
        component: ParentRegistrationSuccessfulComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    ParentRegistrationFormComponent,
    EmailPagesLayoutComponent,
    ParentRegistrationSuccessfulComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
    NgxLoadingModule
  ]
})
export class EmailPagesModule { }
