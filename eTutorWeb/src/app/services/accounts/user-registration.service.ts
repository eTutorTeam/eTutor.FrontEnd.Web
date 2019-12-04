import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {ParentUserRegistrationRequest} from '../../models/parent-user-registration-request';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  public async RegisterParentUser(request: ParentUserRegistrationRequest) {
    return this.http.post(`${environment.apiBaseUrl}/api/accounts/register-parent`, request).toPromise();
  }
}
