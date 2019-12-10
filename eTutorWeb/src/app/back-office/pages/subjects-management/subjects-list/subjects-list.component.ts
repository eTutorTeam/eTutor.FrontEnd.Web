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
  displayColumns = ['id', 'name', 'description', 'tutorsCount', 'action'];
  dataSource = new MatTableDataSource<SubjectResponse>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(SubjectModalComponent, {static: false}) subjectModalComponent: SubjectModalComponent;

  constructor(
      private subjectService: SubjectService,
      private notificationService: ToastNotificationService,
      private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.initializePage();
  }

  createSubject() {
    this.subjectModalComponent.openCreateModal();
  }

  private initializePage() {
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
    this.dataSource.data = this.rawData;
    this.dataSource.paginator = this.paginator;
    console.log(this.rawData, this.dataSource);
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
