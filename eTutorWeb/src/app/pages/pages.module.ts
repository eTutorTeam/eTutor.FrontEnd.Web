import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [PagesLayoutComponent, LoginPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
