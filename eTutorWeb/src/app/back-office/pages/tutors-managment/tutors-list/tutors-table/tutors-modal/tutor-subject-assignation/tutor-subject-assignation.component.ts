import { Component, OnInit } from '@angular/core';
import {ToastNotificationService} from '../../../../../../../services/toast-notification.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {SubjectResponse} from '../../../../../../../models/subject-response';

@Component({
  selector: 'app-tutor-subject-assignation',
  templateUrl: './tutor-subject-assignation.component.html',
  styleUrls: ['./tutor-subject-assignation.component.scss']
})
export class TutorSubjectAssignationComponent implements OnInit {


  availableSubjects: SubjectResponse[] = [];
  chosenSubjects: SubjectResponse[] = [];

  constructor(
      private notificationSevice: ToastNotificationService,
      private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

}
