import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {StudentUserViewModel} from '../models/student-user-view-model';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  constructor(
      private http: HttpClient
  ) { }

  getMyStudents(): Promise<StudentUserViewModel[]> {
    return this.http.get<StudentUserViewModel[]>(`${environment.apiBaseUrl}/api/parent/my-students`).toPromise();
  }

  toggleStateForStudent(studentId: number) {
    return this.http.post(`${environment.apiBaseUrl}/api/parent/toggle-student-state/${studentId}/student`, {}).toPromise();
  }
}
