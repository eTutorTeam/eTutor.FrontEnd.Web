import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from 'src/app/services/accounts/account.service';
import {LoginRequest} from 'src/app/models/login-request';
import {RoleTypes} from 'src/app/enums/role-types.enum';
import {Router} from '@angular/router';
import {ToastNotificationService} from 'src/app/services/toast-notification.service';
import {UserTokenResponse} from '../../models/user-token-response';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private toastNotificationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.checkIfUserAlreadyLogged().catch(err => {
      this.toastNotificationService.showError('Error', err);
    });
  }

  submitForm() {
    this.isLoading = true;
    this.performSignIn().catch(err => {
      this.toastNotificationService.showError('Error', err);
      this.isLoading = false;
    });
  }

  private async performSignIn() {
    if (this.loginForm.invalid) { return; }
    const model: LoginRequest = this.loginForm.value;
    const user: UserTokenResponse = await this.accountService.loginUser(model);
    const navigationResult = await this.performUserNavigation(user);
    if (!navigationResult) { throw new Error('El usuario no tiene permisos para ingresar en este portal'); }
    this.isLoading = false;
  }

  private async checkIfUserAlreadyLogged() {
    const logged = await this.accountService.isUserLoggedIn();
    if (logged) {
      const user = await this.accountService.getLoggedUser();
      await this.performUserNavigation(user);
    }
  }

  private async performUserNavigation(user: UserTokenResponse) {
    const roles = user.roles;
    if (roles.some(r => r === RoleTypes.Admin)) {
      return await this.router.navigate(['admin']);
    } else if (roles.some(r => r === RoleTypes.Parent)) {
      return await this.router.navigate(['parent']);
    } else {
      return false;
    }
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
