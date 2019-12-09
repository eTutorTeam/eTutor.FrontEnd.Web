import {Component, Input, OnInit} from '@angular/core';
import {BackOfficeMenuItem} from '../../../models/back-office-menu-item';

@Component({
  selector: 'app-back-office-menu-items',
  templateUrl: './back-office-menu-items.component.html',
  styleUrls: ['./back-office-menu-items.component.scss']
})
export class BackOfficeMenuItemsComponent implements OnInit {

  @Input() wrapped = false;
  items: BackOfficeMenuItem[] = [
    {
      route: '/admin/dashboard',
      icon: 'fas fa-tachometer-alt',
      label: 'Dashboard'
    },
    {
      route: '/admin/tutors',
      icon: 'fas fa-chalkboard-teacher',
      label: 'Gestión de Tutores'
    },
    {
      route: '/admin/subjects',
      icon: 'fas fa-school',
      label: 'Gestión de Materias'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
