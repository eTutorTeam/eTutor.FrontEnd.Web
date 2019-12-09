import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from '../../services/accounts/account.service';
import {ToastNotificationService} from '../../services/toast-notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangePasswordService} from '../../services/accounts/change-password.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ForgetPasswordChangeRequest} from '../../models/forget-password-change-request';

@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  styleUrls: ['./password-reset-page.component.scss']
})
export class PasswordResetPageComponent implements OnInit, OnDestroy {

  isLoading = false;
  passwordResetForm: FormGroup;
  isValid = false;
  changePasswordId = '';
  passwordsMatch = true;
  subscriptions: Subscription[] = [];

  constructor(
      private notificationService: ToastNotificationService,
      private changePasswordService: ChangePasswordService,
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getParamFromRoute();
    this.checkIfChangeRequestIsValid().catch(err => {
      this.notificationService.showError('Error!', err);
      this.isValid = false;
      this.isLoading = false;
    });
  }

  submitForm() {
    this.isLoading = true;
    this.submitDataToApi().then(res => {
      this.isLoading = false;
    }).catch(err => {
      this.isLoading = false;
      this.notificationService.showError('Error!', err);
    });
  }

  private async submitDataToApi() {
    if (this.passwordResetForm.invalid) {
      return;
    }
    const data: ForgetPasswordChangeRequest = this.passwordResetForm.value;
    await this.changePasswordService.changeUserPasswordUsingChangePasswordId(this.changePasswordId, data);
    this.notificationService.showSucessMessage('Exito!', 'Su contraseña ha sido actualizada correctamente');
    this.router.navigate(['pages/login']);
  }

  get password() {
    return this.passwordResetForm.get('password');
  }

  get confirmPassword() {
    return this.passwordResetForm.get('confirmPassword');
  }

  private buildForm() {
    this.unsubscribeAll();
    this.passwordResetForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required ]
    });
    this.checkForChanges();
  }

  private checkForChanges() {
    const sub = this.passwordResetForm.valueChanges.subscribe(next => {
      this.validatedPasswordAreEqual();
    });
    this.subscriptions.push(sub);
  }

  private validatedPasswordAreEqual() {
    this.passwordsMatch = this.password.value === this.confirmPassword.value;
  }

  private getParamFromRoute() {
    this.changePasswordId = this.route.snapshot.paramMap.get('changePasswordId');
  }

  private async checkIfChangeRequestIsValid() {
    this.isLoading = true;
    await this.changePasswordService.validateChangePasswordRequest(this.changePasswordId);
    this.isValid = true;
    this.isLoading = false;
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  unsubscribeAll() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
