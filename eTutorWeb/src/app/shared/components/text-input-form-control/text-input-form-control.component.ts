import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-text-input-form-control',
  templateUrl: './text-input-form-control.component.html',
  styleUrls: ['./text-input-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputFormControlComponent),
      multi: true
    }
  ]
})

export class TextInputFormControlComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() icon = '';
  @Input() iconRight = '';
  @Input() control: AbstractControl;

  value: string;
  onChange: (obj: any) => void;
  onTouched: () => void;
  disabled: boolean;

  get hasIcon(): boolean {
    return this.icon !== '';
  }

  get hasIconRight(): boolean {
    return this.iconRight !== '';
  }

  constructor() { }

  ngOnInit() {
    if (!this.control) {
      throw new TypeError('You have to specify the control');
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value ? value : '';
  }

  checkIfControlHasErrors() {
    if (this.control.invalid && (this.control.touched || this.control.dirty)) {
      return true;
    }
    return false;
  }

  checkIfValid() {
    if (this.control.valid && (this.control.touched || this.control.dirty)){
      return true;
    }
    return false;
  }


}
