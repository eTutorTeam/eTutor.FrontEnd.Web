import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '../../services/accounts/account.service';
import {ToastNotificationService} from '../../services/toast-notification.service';
import {UsersService} from '../../services/accounts/users.service';
import {UserResponse} from '../../models/user-response';
import {ChangeUserPasswordComponent} from '../../shared/components/change-user-password/change-user-password.component';

@Component({
  selector: 'app-parent-navbar',
  templateUrl: './parent-navbar.component.html',
  styleUrls: ['./parent-navbar.component.scss']
})
export class ParentNavbarComponent implements OnInit {

  isMenuActive = false;
  parentProfile: UserResponse;
  @ViewChild(ChangeUserPasswordComponent, {static: true}) changePasswordComponent: ChangeUserPasswordComponent;

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

  openPasswordModal() {
    this.changePasswordComponent.openModal();
    this.closeDropDown();
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
