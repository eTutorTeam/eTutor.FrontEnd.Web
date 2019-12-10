import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SubjectResponse} from '../models/subject-response';
import {SubjectResponseTutorDetail} from '../models/subject-response-tutor-detail';
import {SubjectRequest} from '../models/subject-request';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
      private http: HttpClient
  ) { }

  async getAllSubjects(): Promise<SubjectResponse[]> {
    return this.http.get<SubjectResponse[]>(`${environment.apiBaseUrl}/api/subjects/all`).toPromise();
  }

  async getSubject(subjectId: number): Promise<SubjectResponseTutorDetail> {
    return this.http.get<SubjectResponseTutorDetail>(`${environment.apiBaseUrl}/api/subjects/${subjectId}`).toPromise();
  }

  async postSubject(subject: SubjectRequest): Promise<SubjectResponse> {
    return this.http.post<SubjectResponse>(`${environment.apiBaseUrl}/api/subjects`, subject).toPromise();
  }

  async putSubject(subject: SubjectRequest): Promise<SubjectResponse> {
    return this.http.put<SubjectResponse>(`${environment.apiBaseUrl}/api/subjects`, subject).toPromise();
  }

  async deleteSubject(subjectId: number): Promise<SubjectResponse> {
    return this.http.delete<SubjectResponse>(`${environment.apiBaseUrl}/api/subjects/${subjectId}`).toPromise();
  }
}
