import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastNotificationService} from '../../services/toast-notification.service';
import {AccountService} from '../../services/accounts/account.service';
import {Router} from '@angular/router';
import {ChangePasswordService} from '../../services/accounts/change-password.service';

@Component({
  selector: 'app-forget-password-page',
  templateUrl: './forget-password-page.component.html',
  styleUrls: ['./forget-password-page.component.scss']
})
export class ForgetPasswordPageComponent implements OnInit {

  isLoading = false;
  emailForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private notificationService: ToastNotificationService,
      private changePasswordService: ChangePasswordService,
      private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  get email() {
    return this.emailForm.get('email');
  }

  submitForm() {
    this.isLoading = true;
    this.sendForgetEmailSolicitude().then(res => {
      this.notificationService.showSucessMessage('Exito!', 'Le hemos enviado un correo con instrucciones para recuperar su contraseña');
      this.isLoading = false;
    }).catch(err => {
      this.notificationService.showError('Error!', err);
      this.isLoading = false;
    });
  }

  private async sendForgetEmailSolicitude() {
    if (this.emailForm.invalid) {
      return;
    }

    await this.changePasswordService.sendForgetPasswordRequest(this.email.value);
    await this.router.navigate(['pages/login']);
  }

  private buildForm() {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
