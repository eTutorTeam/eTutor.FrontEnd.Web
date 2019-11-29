import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';
import { BackOfficeDashboardComponent } from './back-office-dashboard/back-office-dashboard.component';
import { BackOfficeNavbarComponent } from './back-office-navbar/back-office-navbar.component';


@NgModule({
  declarations: [
    BackOfficeLayoutComponent,
    BackOfficeDashboardComponent,
    BackOfficeNavbarComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
