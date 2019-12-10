import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';
import { BackOfficeDashboardComponent } from './pages/back-office-dashboard/back-office-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: BackOfficeLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: BackOfficeDashboardComponent
      },
      {
        path: 'tutors',
        loadChildren: () => import('./pages/tutors-managment/tutors-managment.module').then(m => m.TutorsManagmentModule)
      },
      {
        path: 'subjects',
        loadChildren: () => import('./pages/subjects-management/subjects-management.module').then(m => m.SubjectsManagementModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
