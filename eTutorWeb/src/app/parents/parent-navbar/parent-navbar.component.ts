import {Component, HostListener, OnInit} from '@angular/core';
import {AccountService} from '../../services/accounts/account.service';
import {ToastNotificationService} from '../../services/toast-notification.service';

@Component({
  selector: 'app-parent-navbar',
  templateUrl: './parent-navbar.component.html',
  styleUrls: ['./parent-navbar.component.scss']
})
export class ParentNavbarComponent implements OnInit {

  isMenuActive = false;
  constructor(
      private accountService: AccountService,
      private notificationService: ToastNotificationService
  ) { }

  ngOnInit() {
  }

  openDropDown() {
    this.isMenuActive = true;
  }

  closeDropDown() {
    this.isMenuActive = false;
  }

  logoutUser() {
    this.accountService.logoutUser().catch(err => {
      this.notificationService.showError('Error', err);
    });
  }


}
