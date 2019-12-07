import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsComponent } from './parents.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentNavbarComponent } from './parent-navbar/parent-navbar.component';


@NgModule({
  declarations: [ParentsComponent, ParentNavbarComponent],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParentsModule { }
