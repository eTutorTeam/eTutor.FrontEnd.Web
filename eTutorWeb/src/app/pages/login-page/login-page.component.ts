import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AccountService } from 'src/app/services/accounts/account.service';
import { LoginRequest } from 'src/app/models/login-request';
import { RoleTypes } from 'src/app/enums/role-types.enum';
import { Router } from '@angular/router';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private toastNotificationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  submitForm() {
    this.performSignIn().catch(err => {
      this.toastNotificationService.showErrorMessage('Error', err);
    });
  }

  private async performSignIn() {
    if (this.loginForm.invalid) return;
    const model: LoginRequest = this.loginForm.value;
    const user = await this.accountService.loginUser(model);
    const navigationResult = await this.router.navigate(['admin'])
    if (!navigationResult) throw new Error("El usuario no tiene permisos para ingresar en este portal");
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  checkIfControlHasErrors(control: AbstractControl) {
    if (control.invalid && (control.touched || control.dirty)) {
      return true;
    }
    return false;
  }

}
