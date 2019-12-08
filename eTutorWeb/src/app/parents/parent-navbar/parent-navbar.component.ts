import {Component, HostListener, OnInit} from '@angular/core';
import {AccountService} from '../../services/accounts/account.service';
import {ToastNotificationService} from '../../services/toast-notification.service';
import {UsersService} from '../../services/accounts/users.service';
import {UserResponse} from '../../models/user-response';

@Component({
  selector: 'app-parent-navbar',
  templateUrl: './parent-navbar.component.html',
  styleUrls: ['./parent-navbar.component.scss']
})
export class ParentNavbarComponent implements OnInit {

  isMenuActive = false;
  parentProfile: UserResponse;
  constructor(
      private accountService: AccountService,
      private notificationService: ToastNotificationService,
      private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUserProfile().catch(err => {
      this.notificationService.showError('Error', err);
    });
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

  private async getUserProfile() {
    this.parentProfile = await this.usersService.getUserProfile();
  }


}
