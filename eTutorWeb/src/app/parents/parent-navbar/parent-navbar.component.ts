import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-navbar',
  templateUrl: './parent-navbar.component.html',
  styleUrls: ['./parent-navbar.component.scss']
})
export class ParentNavbarComponent implements OnInit {

  isMenuActive = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  public listenMouseClicks() {
    //this.isMenuActive = false;
  }

  openDropDown() {
    this.isMenuActive = true;
  }

  closeDropDown() {
    this.isMenuActive = false;
  }

}
