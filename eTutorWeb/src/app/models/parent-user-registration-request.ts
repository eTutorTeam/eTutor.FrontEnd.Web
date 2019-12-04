import {Gender} from '../enums/gender';

export interface ParentUserRegistrationRequest {
  name: string;
  lastName: string;
  gender: Gender;
  password: string;
  email: string;
  userName: string;
  studentId: number;
  birthDate: Date;
  personalId: string;
}
