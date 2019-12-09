import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-back-office-sidebar',
  templateUrl: './back-office-sidebar.component.html',
  styleUrls: ['./back-office-sidebar.component.scss']
})
export class BackOfficeSidebarComponent implements OnInit {

  @Input() wrapped: boolean;

  constructor() { }

  ngOnInit() {
  }

}
