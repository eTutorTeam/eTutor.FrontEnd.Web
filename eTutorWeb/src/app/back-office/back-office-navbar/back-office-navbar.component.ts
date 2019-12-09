import { AccountService } from './../../services/accounts/account.service';
import { ToastNotificationService } from './../../services/toast-notification.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserTokenResponse } from 'src/app/models/user-token-response';

@Component({
  selector: 'app-back-office-navbar',
  templateUrl: './back-office-navbar.component.html',
  styleUrls: ['./back-office-navbar.component.scss']
})
export class BackOfficeNavbarComponent implements OnInit {

  @Input() wrapped: boolean;
  @Output() burgerClick = new EventEmitter();
  user: UserTokenResponse;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private notifcationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.accountService.getLoggedUser().then(user => {
      this.user = user;
    }).catch(err => {
      this.notifcationService.showErrorMessage('Error', err);
    });
  }

  menuAction() {
    this.burgerClick.emit();
  }

  signOut() {
    this.accountService.logoutUser().catch(error => {
      this.notifcationService.showError('Error', error);
    });
  }
}
