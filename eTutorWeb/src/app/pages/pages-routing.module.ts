import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
