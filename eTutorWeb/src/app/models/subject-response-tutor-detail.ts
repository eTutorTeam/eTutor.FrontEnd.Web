import {TutorSimpleResponse} from './tutor-simple-response';

export interface SubjectResponseTutorDetail {
    id: number;
    name: string;
    description: string;
    tutors: TutorSimpleResponse[];
    createdDate: string;
}
