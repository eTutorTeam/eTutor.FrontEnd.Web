import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ForgetPasswordChangeRequest} from '../../models/forget-password-change-request';
import {ChangePasswordRequest} from '../../models/change-password-request';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  private apiBaseUrl = environment.apiBaseUrl;
  constructor(
      private http: HttpClient
  ) { }

  async validateChangePasswordRequest(changePasswordId: string) {
    return this.http.get(`${this.apiBaseUrl}/api/accounts/change-password-request/${changePasswordId}`).toPromise();
  }

  async sendForgetPasswordRequest(email: string) {
    return this.http.post(`${this.apiBaseUrl}/api/accounts/forget-password`, {email}).toPromise();
  }

  async changeUserPasswordUsingChangePasswordId(changePasswordId: string, request: ForgetPasswordChangeRequest) {
    return this.http.put(`${this.apiBaseUrl}/api/accounts/forget-password/${changePasswordId}`, request).toPromise();
  }

  async changeUserPasswordForLoggedUser(changeRequest: ChangePasswordRequest) {
    return this.http.put(`${this.apiBaseUrl}/api/accounts/change-password`, changeRequest).toPromise();
  }

}
