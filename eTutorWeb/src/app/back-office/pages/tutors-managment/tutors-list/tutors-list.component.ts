import { Component, OnInit } from '@angular/core';
import {UserAdminResponseModel} from '../../../../models/user-admin-response-model';
import {TutorsService} from '../../../../services/tutors.service';
import {ToastNotificationService} from '../../../../services/toast-notification.service';

@Component({
  selector: 'app-tutors-validation',
  templateUrl: './tutors-list.component.html',
  styleUrls: ['./tutors-list.component.scss']
})
export class TutorsListComponent implements OnInit {

  tableColumns = ['Id', 'Nombre', 'Cedula', 'Correo Electronico', ''];
  inactiveTutors: UserAdminResponseModel[] = [];
  activeTutors: UserAdminResponseModel[] = [];
  isLoading = false;

  constructor(
    private tutorsService: TutorsService,
    private toastNotificationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  activateTutor(id: number) {
    this.isLoading = true;
    this.tutorsService.activateTutor(id).then(res => {
      this.loadData();
    }).catch( err => {
      this.isLoading = false;
      this.toastNotificationService.showError('Error', err);
    });
  }

  inactivateTutor(id: number) {
    this.isLoading = true;
    this.tutorsService.inactivateTutor(id).then(res => {
      this.loadData();
    }).catch( err => {
      this.isLoading = false;
      this.toastNotificationService.showError('Error', err);
    });
  }

  private loadData() {
    this.loadDataAsync().catch(err => {
      this.isLoading = false;
      this.toastNotificationService.showError('Error', err);
    });
  }

  private async loadDataAsync() {
    this.isLoading = true;
    this.inactiveTutors = await this.tutorsService.getInactiveTutors();
    this.activeTutors = await this.tutorsService.getActiveTutors();
    this.isLoading = false;
  }

}
