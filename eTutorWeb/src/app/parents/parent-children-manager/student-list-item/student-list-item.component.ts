import {Component, Input, OnInit} from '@angular/core';
import {StudentUserViewModel} from '../../../models/student-user-view-model';
import {ParentsService} from '../../../services/parents.service';
import {ToastNotificationService} from '../../../services/toast-notification.service';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent implements OnInit {

  isLoading = false;
  idKey =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  checked = false;
  @Input() student: StudentUserViewModel;

  constructor(
      private parentsService: ParentsService,
      private notificationService: ToastNotificationService
  ) { }

  ngOnInit(): void {
    this.checked = this.student.isActive;
  }

  toggleStudentState() {
    this.isLoading = true;
    this.checked = !this.checked;
    this.parentsService.toggleStateForStudent(this.student.id)
        .then(res => {
          this.isLoading = false;
          this.notificationService.showSucessMessage('Actualizado!', 'El estado del estudiante ha sido cambiado exitosamente');
          this.student.isActive = this.checked;
        })
        .catch(err => {
          this.isLoading = false;
          this.notificationService.showError('Error', err);
          this.checked = this.student.isActive;
        });
  }

}
