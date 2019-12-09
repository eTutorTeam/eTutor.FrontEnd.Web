import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './back-office-layout.component.html',
  styleUrls: ['./back-office-layout.component.scss']
})
export class BackOfficeLayoutComponent implements OnInit {

  isWrapped = false;
  constructor() { }

  ngOnInit() {
  }

  openCloseMenu() {
    this.isWrapped = !this.isWrapped;
  }

}
