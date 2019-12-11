import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SubjectResponse} from '../models/subject-response';

@Injectable({
  providedIn: 'root'
})
export class TutorSubjectService {

  constructor(
      private http: HttpClient
  ) { }

  async getSubjectsForTutorByTutorId(tutorId: number): Promise<SubjectResponse[]> {
    return this.http.get<SubjectResponse[]>(`${environment.apiBaseUrl}/api/tutor-subject/get-subjects/${tutorId}/tutor`).toPromise();
  }

  async getSubjectsNotAssignedToTutor(tutorId: number): Promise<SubjectResponse[]> {
    return this.http.get<SubjectResponse[]>
    (`${environment.apiBaseUrl}/api/tutor-subject/get-subjects/${tutorId}/tutor?inverse=true`).toPromise();
  }

  async getSubjectsForTutor(): Promise<SubjectResponse[]> {
    return this.http.get<SubjectResponse[]>(`${environment.apiBaseUrl}/api/tutor-subject/get-subjects/tutor`).toPromise();
  }
}
