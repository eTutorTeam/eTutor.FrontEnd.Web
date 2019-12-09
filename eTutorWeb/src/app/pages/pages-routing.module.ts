import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {ForgetPasswordPageComponent} from './forget-password-page/forget-password-page.component';


const routes: Routes = [
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'forget-password',
        component: ForgetPasswordPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
