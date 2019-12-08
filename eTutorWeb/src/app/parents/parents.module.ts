import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsComponent } from './parents.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentNavbarComponent } from './parent-navbar/parent-navbar.component';
import {ClickOutsideModule} from 'ng4-click-outside';
import { ParentChildrenManagerComponent } from './parent-children-manager/parent-children-manager.component';
import { StudentListItemComponent } from './parent-children-manager/student-list-item/student-list-item.component';
import {NgxLoadingModule} from 'ngx-loading';


@NgModule({
  declarations: [ParentsComponent, ParentNavbarComponent, ParentChildrenManagerComponent, StudentListItemComponent],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    NgxLoadingModule
  ]
})
export class ParentsModule { }
