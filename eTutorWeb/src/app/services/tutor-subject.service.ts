import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SubjectResponse} from '../models/subject-response';
import {TutorSubjectAssignmentModel} from '../models/tutor-subject-assignment-model';

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
    return this.http.get<SubjectResponse[]>(`${environment.apiBaseUrl}/api/tutor-subject/get-s  ubjects/tutor`).toPromise();
  }

  async assignSubjectsToTutors(tutorId: number, subjects: number[]) {
    const model: TutorSubjectAssignmentModel = {
      subjectIds: subjects
    };
    return this.http.post(`${environment.apiBaseUrl}/api/tutor-subject/assign-subjects/${tutorId}/tutor`, model).toPromise();
  }
}
