import { Component, OnInit } from '@angular/core';
import {UserAdminResponseModel} from '../../../models/user-admin-response-model';
import {TutorsService} from '../../../services/tutors.service';
import {ToastNotificationService} from '../../../services/toast-notification.service';

@Component({
  selector: 'app-tutors-validation',
  templateUrl: './tutors-validation.component.html',
  styleUrls: ['./tutors-validation.component.scss']
})
export class TutorsValidationComponent implements OnInit {

  tableColumns = ['Id', 'Nombre', 'Cedula', 'Correo Electronico', ''];
  inactiveTutors: UserAdminResponseModel[] = [];
  activeTutors: UserAdminResponseModel[] = [];
  isLoading = false;

  constructor(
    private tutorsService: TutorsService,
    private toastNotificationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.loadData().catch(err => {
      this.isLoading = false;
      this.toastNotificationService.showError('Error', err);
    });
  }

  activateTutor(id: number) {
    this.isLoading = true;
    this.tutorsService.activateTutor(id).then(res => {
      console.log(res);
      this.isLoading = false;
    }).catch( err => {
      this.isLoading = false;
      this.toastNotificationService.showError('Error', err);
    });
  }

  private async loadData() {
    this.isLoading = true;
    this.inactiveTutors = await this.tutorsService.getInactiveTutors();
    this.activeTutors = await this.tutorsService.getActiveTutors();
    this.isLoading = false;
  }

}
