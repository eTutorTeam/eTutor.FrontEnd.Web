import {Component, OnInit, ViewChild} from '@angular/core';
import {TutorSubjectAssignationComponent} from './tutor-subject-assignation/tutor-subject-assignation.component';

@Component({
  selector: 'app-tutors-modal',
  templateUrl: './tutors-modal.component.html',
  styleUrls: ['./tutors-modal.component.scss']
})
export class TutorsModalComponent implements OnInit {

  isVisible = false;
  isLoading = false;
  @ViewChild(TutorSubjectAssignationComponent, {static: true}) tutorSubjectAssignationComponent: TutorSubjectAssignationComponent;

  constructor() { }

  ngOnInit() {
  }

  openModal(tutorId: number) {
    this.tutorSubjectAssignationComponent.getTutorData(tutorId);
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
    this.tutorSubjectAssignationComponent.reset();
  }

  submitChanges() {
    this.tutorSubjectAssignationComponent.submitChanges();
  }

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }

}
