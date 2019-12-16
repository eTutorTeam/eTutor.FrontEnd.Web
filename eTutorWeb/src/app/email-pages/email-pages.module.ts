import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRegistrationFormComponent } from './parent-registration-form/parent-registration-form.component';
import { EmailPagesLayoutComponent } from './email-pages-layout/email-pages-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import {NgxLoadingModule} from 'ngx-loading';
import { ParentRegistrationSuccessfulComponent } from './parent-registration-successful/parent-registration-successful.component';
import { PasswordResetPageComponent } from './password-reset-page/password-reset-page.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';
import {NgxSpinnerModule} from 'ngx-spinner';

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
      },
      {
        path: 'password-reset/:changePasswordId',
        component: PasswordResetPageComponent
      },
      {
        path: 'validate-email/:emailToken',
        component: ValidateEmailComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    ParentRegistrationFormComponent,
    EmailPagesLayoutComponent,
    ParentRegistrationSuccessfulComponent,
    PasswordResetPageComponent,
    ValidateEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
    NgxLoadingModule,
    NgxSpinnerModule
  ]
})
export class EmailPagesModule { }
