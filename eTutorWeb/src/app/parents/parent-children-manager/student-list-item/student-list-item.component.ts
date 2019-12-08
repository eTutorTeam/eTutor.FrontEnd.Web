import {Component, Input, OnInit} from '@angular/core';
import {StudentUserViewModel} from '../../../models/student-user-view-model';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent implements OnInit {

  idKey =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  @Input() student: StudentUserViewModel;

  constructor() { }

  ngOnInit() {
  }

}
