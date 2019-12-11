import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserAdminResponseModel} from '../../../../../models/user-admin-response-model';

@Component({
  selector: 'app-tutors-table',
  templateUrl: './tutors-table.component.html',
  styleUrls: ['./tutors-table.component.scss']
})
export class TutorsTableComponent implements OnInit {

  @Input() tutorUsers: UserAdminResponseModel[];
  @Output() stateChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  changeTutorState(id: number) {
    this.stateChanged.emit(id);
  }

}
