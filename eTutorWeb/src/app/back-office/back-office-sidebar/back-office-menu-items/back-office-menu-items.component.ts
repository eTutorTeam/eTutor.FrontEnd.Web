import { Component, OnInit } from '@angular/core';
import {BackOfficeMenuItem} from '../../../models/back-office-menu-item';

@Component({
  selector: 'app-back-office-menu-items',
  templateUrl: './back-office-menu-items.component.html',
  styleUrls: ['./back-office-menu-items.component.scss']
})
export class BackOfficeMenuItemsComponent implements OnInit {

  items: BackOfficeMenuItem[] = [
    {
      route: '/admin/tutors',
      icon: 'fas fa-chalkboard-teacher',
      label: 'Gestion Tutores'
    },
    {
      route: '#',
      icon: 'fas fa-school',
      label: 'DEMO BUTTON'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
