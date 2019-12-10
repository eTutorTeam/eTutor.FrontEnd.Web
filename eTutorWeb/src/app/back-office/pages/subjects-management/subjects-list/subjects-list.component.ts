import {Component, OnInit, ViewChild} from '@angular/core';
import {SubjectResponse} from '../../../../models/subject-response';
import {SubjectService} from '../../../../services/subject.service';
import {ToastNotificationService} from '../../../../services/toast-notification.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SubjectModalComponent} from './subject-modal/subject-modal.component';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {

  isLoading = false;
  rawData: SubjectResponse[] = [];
  @ViewChild(SubjectModalComponent, {static: false}) subjectModalComponent: SubjectModalComponent;

  constructor(
      private subjectService: SubjectService,
      private notificationService: ToastNotificationService,
      private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.initializePage();
  }

  createSubject() {
    this.subjectModalComponent.openCreateModal();
  }

  editSubject(id: number) {
    this.subjectModalComponent.openEditModal(id);
  }

  confirmDelete(subjectId: number) {
    this.deleteSubject(subjectId).then(res => {
      this.notificationService.showSucessMessage('Exito!', 'La materia fue eliminada exitosamente.');
    }).catch(err => {
      this.notificationService.showError('Error!', err);
    });
  }


  private async deleteSubject(subjectId: number) {
    this.startLoading();
    await this.subjectService.deleteSubject(subjectId);
    await this.loadData();
    this.stopLoading();
  }

  initializePage() {
    this.startLoading();
    this.loadData().then(res => {
      this.stopLoading();
    }).catch(err => {
      this.stopLoading();
      this.notificationService.showError('Error', err);
    });
  }

  private async loadData() {
    await this.getSubjects();
  }

  private async getSubjects() {
    this.rawData = await this.subjectService.getAllSubjects();
  }


  private startLoading() {
    this.isLoading = true;
    this.spinnerService.show();
  }

  private stopLoading() {
    this.isLoading = false;
    this.spinnerService.hide();
  }

}
