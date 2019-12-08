import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent implements OnInit {

  idKey =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  constructor() { }

  ngOnInit() {
  }

}
