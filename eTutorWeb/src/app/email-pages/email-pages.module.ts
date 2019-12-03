import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesLayoutComponent} from '../pages/pages-layout/pages-layout.component';
import {EmailPagesRoutingModule} from './email-pages-routing.module';
import { ParentRegistrationFormComponent } from './parent-registration-form/parent-registration-form.component';


@NgModule({
  declarations: [PagesLayoutComponent, ParentRegistrationFormComponent],
  imports: [
    CommonModule,
    EmailPagesRoutingModule
  ]
})
export class EmailPagesModule { }
