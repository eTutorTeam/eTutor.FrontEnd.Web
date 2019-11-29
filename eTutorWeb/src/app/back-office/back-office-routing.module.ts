import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';
import { BackOfficeDashboardComponent } from './back-office-dashboard/back-office-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: BackOfficeLayoutComponent,
    children: [
      {
        path: '',
        component: BackOfficeDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
