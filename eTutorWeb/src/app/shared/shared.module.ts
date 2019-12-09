import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputFormControlComponent } from './components/text-input-form-control/text-input-form-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ChangeUserPasswordComponent } from './components/change-user-password/change-user-password.component';
import {NgxLoadingModule} from 'ngx-loading';


const inputs = [
    TextInputFormControlComponent,
    ChangeUserPasswordComponent
];

@NgModule({
  declarations: [...inputs],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
      NgxLoadingModule
  ],
  exports: [...inputs]
})
export class SharedModule { }
