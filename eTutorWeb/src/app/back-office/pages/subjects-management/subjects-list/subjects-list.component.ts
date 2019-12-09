import { Component, OnInit } from '@angular/core';
import {SubjectResponse} from '../../../../models/subject-response';
import {SubjectService} from '../../../../services/subject.service';
import {ToastNotificationService} from '../../../../services/toast-notification.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {

  isLoading = false;
  rawData: SubjectResponse[] = [];
  displayColumns = ['id', 'name', 'description', 'tutorsCount'];
  dataSource = new MatTableDataSource<SubjectResponse>();

  constructor(
      private subjectService: SubjectService,
      private notificationService: ToastNotificationService,
  ) { }

  ngOnInit() {
    this.initializePage();
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
    console.log(this.rawData, this.dataSource);
  }

  private startLoading() {
    this.isLoading = true;
  }

  private stopLoading() {
    this.isLoading = false;
  }

}
