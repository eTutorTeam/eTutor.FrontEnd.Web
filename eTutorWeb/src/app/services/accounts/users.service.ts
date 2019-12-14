import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { SimpleUserResponse } from 'src/app/models/SimpleUserResponse';
import {UserResponse} from '../../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  async getUserDetails(userId: number): Promise<SimpleUserResponse> {
    return this.http.get<SimpleUserResponse>(`${environment.apiBaseUrl}/api/users/simple/${userId}`).toPromise();
  }

  async getUserProfile(): Promise<UserResponse> {
    return this.http.get<UserResponse>(`${environment.apiBaseUrl}/api/users/profile`).toPromise();
  }

  async postEmailValidationToken(token: string) {
    return this.http.post(`${environment.apiBaseUrl}/api/accounts/validate-email/${token}`, {}).toPromise();
  }
}
