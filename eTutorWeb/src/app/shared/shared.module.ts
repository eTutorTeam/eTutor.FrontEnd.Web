import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputFormControlComponent } from './components/text-input-form-control/text-input-form-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [TextInputFormControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  exports: [TextInputFormControlComponent]
})
export class SharedModule { }
