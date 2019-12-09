import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgxLoadingModule } from 'ngx-loading';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ForgetPasswordPageComponent } from './forget-password-page/forget-password-page.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [PagesLayoutComponent, LoginPageComponent, ForgetPasswordPageComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule,
        SharedModule
    ],
})
export class PagesModule { }
