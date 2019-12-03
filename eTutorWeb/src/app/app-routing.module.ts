import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesLayoutComponent } from './pages/pages-layout/pages-layout.component';
import { RoleTypes } from './enums/role-types.enum';
import { RoleAuthGuard } from './services/accounts/role-auth.guard';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'pages/login', pathMatch: 'full'},
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule),
    data: {
      roles: [RoleTypes.Admin]
    },
    canActivate: [RoleAuthGuard]
  },
  {
    path: 'emails',
    loadChildren: () => import('./email-pages/email-pages.module').then(m => m.EmailPagesModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
