import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SimpleUserResponse} from '../../models/SimpleUserResponse';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DominicanVerificationDigitValidator} from '../../shared/functions/dominican-verification-digit';

@Component({
  selector: 'app-parent-registration-form',
  templateUrl: './parent-registration-form.component.html',
  styleUrls: ['./parent-registration-form.component.scss']
})
export class ParentRegistrationFormComponent implements OnInit {

  student: SimpleUserResponse;
  studentId = 0;
  registrationForm: FormGroup;
  passwordsMatch = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: [1, Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      personalId: ['', [Validators.required, DominicanVerificationDigitValidator]]
    });
  }

  get name() {
    return this.registrationForm.get('name');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get birthDate() {
    return this.registrationForm.get('birthDate');
  }

  get personalId() {
    return this.registrationForm.get('personalId');
  }

  checkIfControlHasErrors(control: AbstractControl) {
    if (control.invalid && (control.touched || control.dirty)) {
      return true;
    }
    return false;
  }
}
