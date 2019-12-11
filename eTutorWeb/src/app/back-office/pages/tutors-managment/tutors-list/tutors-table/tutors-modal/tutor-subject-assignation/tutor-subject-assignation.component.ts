import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToastNotificationService} from '../../../../../../../services/toast-notification.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {SubjectResponse} from '../../../../../../../models/subject-response';
import {TutorSubjectService} from '../../../../../../../services/tutor-subject.service';
import {SubjectService} from '../../../../../../../services/subject.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tutor-subject-assignation',
  templateUrl: './tutor-subject-assignation.component.html',
  styleUrls: ['./tutor-subject-assignation.component.scss']
})
export class TutorSubjectAssignationComponent implements OnInit {

  isLoading = false;
  availableSubjects: SubjectResponse[] = [];
  chosenSubjects: SubjectResponse[] = [];
  tutorId = 0;
  @Output() submitted = new EventEmitter();

  constructor(
      private notificationSevice: ToastNotificationService,
      private spinnerService: NgxSpinnerService,
      private tutorSubjectService: TutorSubjectService
  ) { }

  ngOnInit() {
  }

  reset() {
    this.tutorId = 0;
    this.availableSubjects = [];
    this.chosenSubjects = [];
  }

  getTutorData(tutorId: number) {
    this.tutorId = tutorId;
    this.loadData(tutorId).catch(err => {
      this.stopLoading();
      this.notificationSevice.showError('Error!', err);
    });
  }

  drop(event: CdkDragDrop<SubjectResponse[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  submitChanges() {
    this.startLoading();
    this.sendChosenSubjectIds().then(res => {
      this.stopLoading();
      this.submitted.emit();
    }).catch(err => {
      this.stopLoading();
      this.notificationSevice.showError('Error!', err);
    });
  }

  private async sendChosenSubjectIds() {
    const ids: number[] = this.chosenSubjects.map(sub => sub.id);
    await this.tutorSubjectService.assignSubjectsToTutors(this.tutorId, ids);
  }


  private async loadData(tutorId: number) {
    this.startLoading();
    await this.getNotAssingedSubjects(tutorId);
    await this.getChosenSubjects(tutorId);
    this.stopLoading();
  }

  private async getNotAssingedSubjects(tutorId: number) {
    this.availableSubjects = await this.tutorSubjectService.getSubjectsNotAssignedToTutor(tutorId);
  }

  private async getChosenSubjects(tutorId: number) {
    this.chosenSubjects = await this.tutorSubjectService.getSubjectsForTutorByTutorId(tutorId);
  }

  private startLoading() {
    this.isLoading = true;
    this.spinnerService.show();
  }

  private stopLoading() {
    this.isLoading = false;
    this.spinnerService.hide();
  }
}
