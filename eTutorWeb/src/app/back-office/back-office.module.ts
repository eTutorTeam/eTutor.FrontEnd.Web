import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';
import { BackOfficeDashboardComponent } from './back-office-dashboard/back-office-dashboard.component';


@NgModule({
  declarations: [
    BackOfficeLayoutComponent, 
    BackOfficeDashboardComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
