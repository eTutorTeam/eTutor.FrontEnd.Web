import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserAdminResponseModel} from '../../../../../models/user-admin-response-model';
import {TutorsModalComponent} from './tutors-modal/tutors-modal.component';

@Component({
  selector: 'app-tutors-table',
  templateUrl: './tutors-table.component.html',
  styleUrls: ['./tutors-table.component.scss']
})
export class TutorsTableComponent implements OnInit {

  @Input() tutorUsers: UserAdminResponseModel[];
  @Output() stateChanged = new EventEmitter<number>();
  @ViewChild(TutorsModalComponent, {static: false}) tutorsModal: TutorsModalComponent;
  constructor() { }

  ngOnInit() {
  }

  changeTutorState(id: number) {
    this.stateChanged.emit(id);
  }

  manageSubjects(id: number) {
    this.tutorsModal.openModal(id);
  }

}
