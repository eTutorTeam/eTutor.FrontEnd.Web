import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SubjectResponse} from '../models/subject-response';

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
}
