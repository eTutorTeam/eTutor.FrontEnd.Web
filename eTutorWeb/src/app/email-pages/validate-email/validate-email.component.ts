import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services/accounts/users.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {

  emailToken = '';
  screenMessage = 'Su correo electrónico esta siendo validada en este momento';

  constructor(
      private route: ActivatedRoute,
      private userService: UsersService,
      private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loadScreen().catch((err: any) => {
      this.screenMessage = err.error.message;
      this.stopLoading();
    });
  }

  private async loadScreen() {
    this.startLoading();
    this.getTokenFromRoute();
    if (this.emailToken !== '') {
      const res: any = await this.userService.postEmailValidationToken(this.emailToken);
      this.screenMessage = res.entity;
    }
    this.stopLoading();
  }

  private getTokenFromRoute() {
    this.emailToken = this.route.snapshot.paramMap.get('emailToken');
  }

  private startLoading() {
    this.spinnerService.show('validation-spinner');
  }

  private stopLoading() {
    this.spinnerService.hide('validation-spinner');
  }

}
