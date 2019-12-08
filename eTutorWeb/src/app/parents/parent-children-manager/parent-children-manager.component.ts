import { Component, OnInit } from '@angular/core';
import {ToastNotificationService} from '../../services/toast-notification.service';
import {ParentsService} from '../../services/parents.service';
import {StudentUserViewModel} from '../../models/student-user-view-model';

@Component({
  selector: 'app-parent-children-manager',
  templateUrl: './parent-children-manager.component.html',
  styleUrls: ['./parent-children-manager.component.scss']
})
export class ParentChildrenManagerComponent implements OnInit {

  isLoading = false;
  students: StudentUserViewModel[] = [];

  constructor(
      private notificationService: ToastNotificationService,
      private parentsService: ParentsService
  ) { }

  ngOnInit() {
    this.loadStudents().catch(err => {
      this.isLoading = false;
      this.notificationService.showError('Error', err);
    });
  }

  private async loadStudents() {
    this.isLoading = true;
    this.students = await this.parentsService.getMyStudents();
    this.isLoading = false;
  }

}
