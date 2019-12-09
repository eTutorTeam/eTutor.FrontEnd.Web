import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastNotificationService} from '../../../services/toast-notification.service';
import {ChangePasswordService} from '../../../services/accounts/change-password.service';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.scss']
})
export class ChangeUserPasswordComponent implements OnInit {

  changeForm: FormGroup;
  isVisible = false;
  isLoading = false;

  constructor(
      private fb: FormBuilder,
      private notificationService: ToastNotificationService,
      private changePasswordService: ChangePasswordService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  get currentPassword() {
    return this.changeForm.get('currentPassword');
  }

  get newPassword() {
    return this.changeForm.get('newPassword');
  }

  get newPasswordConfirm() {
    return this.changeForm.get('newPasswordConfirm');
  }

  get passwordsMatch(): boolean {
    return this.newPassword.value === this.newPasswordConfirm.value;
  }

  get oldAndNewPasswordAreDifferent(): boolean {
    return this.currentPassword.value !== this.newPassword.value;
  }

  get formIsValid(): boolean {
    return this.changeForm.valid && this.passwordsMatch && this.oldAndNewPasswordAreDifferent;
  }

  public closeModal() {
    this.changeForm.reset();
    this.isVisible = false;
  }

  public openModal() {
    this.changeForm.reset();
    this.isVisible = true;
  }

  submitForm() {
    this.isLoading = true;
    this.submitPasswordChange().then(res => {
      this.isLoading = false;
      this.notificationService.showSucessMessage('Exito!', 'La contraseña ha sido actualizada exitosamente!');
    }).catch(err => {
      this.isLoading = false;
      this.notificationService.showError('Error!', err);
    });
  }

  private async submitPasswordChange() {
    if (this.formIsValid) {
      const changePassword = this.changeForm.value;
      await this.changePasswordService.changeUserPasswordForLoggedUser(changePassword);
      this.closeModal();
    }
  }

  private buildForm() {
    this.changeForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordConfirm: ['', Validators.required]
    });
  }

}
