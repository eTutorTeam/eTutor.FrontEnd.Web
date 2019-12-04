import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesLayoutComponent} from '../pages/pages-layout/pages-layout.component';
import { ParentRegistrationFormComponent } from './parent-registration-form/parent-registration-form.component';
import { EmailPagesLayoutComponent } from './email-pages-layout/email-pages-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

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
];


@NgModule({
  declarations: [
    ParentRegistrationFormComponent,
    EmailPagesLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class EmailPagesModule { }
