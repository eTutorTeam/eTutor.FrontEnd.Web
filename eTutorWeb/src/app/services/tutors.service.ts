import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {UserAdminResponseModel} from '../models/user-admin-response-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorsService {

  constructor(
    private http: HttpClient
  ) { }

  async getActiveTutors(): Promise<UserAdminResponseModel[]> {
    return this.http.get<UserAdminResponseModel[]>(`${environment.apiBaseUrl}/api/tutors/active`).toPromise();
  }

  async getInactiveTutors(): Promise<UserAdminResponseModel[]> {
    return this.http.get<UserAdminResponseModel[]>(`${environment.apiBaseUrl}/api/tutors/inactive`).toPromise();
  }

  async activateTutor(tutorId: number): Promise<UserAdminResponseModel> {
    return this.http.post<UserAdminResponseModel>(`${environment.apiBaseUrl}/api/tutors/activate/${tutorId}`, {}).toPromise();
  }

  async inactivateTutor(tutorId: number): Promise<UserAdminResponseModel> {
    return this.http.post<UserAdminResponseModel>(`${environment.apiBaseUrl}/api/tutors/inactivate/${tutorId}`, {}).toPromise();
  }
}
