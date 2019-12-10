import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastNotificationService} from '../../../../../../services/toast-notification.service';
import {SubjectService} from '../../../../../../services/subject.service';
import {SubjectResponseTutorDetail} from '../../../../../../models/subject-response-tutor-detail';
import {SubjectRequest} from '../../../../../../models/subject-request';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  subjectForm: FormGroup;
  subjectId = 0;
  hasError = false;
  isLoading = false;
  @Input() isEdit: boolean;
  @Output() submitted = new EventEmitter();

  constructor(
      private fb: FormBuilder,
      private notificationService: ToastNotificationService,
      private subjectsService: SubjectService,
      private spinnerServie: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.subjectForm = this.fb.group({
      id: ['0'],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get isValid() {
    return this.subjectForm.valid;
  }

  get id() {
    return this.subjectForm.get('id');
  }

  get name() {
    return this.subjectForm.get('name');
  }

  get description() {
    return this.subjectForm.get('description');
  }

  async submitForm() {
    if (this.subjectForm.invalid) {
      return;
    }
    this.startLoading();

    return new Promise(((resolve, reject) => {
      this.performSubmitRequest().then(res => {
        this.stopLoading();
        resolve();
      }).catch(err => {
        this.stopLoading();
        this.notificationService.showError('Error!', err);
        reject();
      });
    }));
  }

  private async performSubmitRequest() {
    if (this.isEdit) {
      await this.updateSubject();
    } else {
      await this.createSubject();
    }
    this.resetForm();
    this.submitted.emit();
  }

  private async updateSubject() {
    if (this.subjectForm.invalid) {
      return;
    }
    const value: SubjectRequest = this.subjectForm.value;
    const res = await this.subjectsService.putSubject(value);
    this.notificationService.showSucessMessage('Exito!', 'La materia ha sido actualizada exitosamente');
    return res;
  }

  private async createSubject() {
    if (this.subjectForm.invalid) {
      return;
    }
    const value: SubjectRequest = this.subjectForm.value;
    this.subjectForm.patchValue({name: '', description: ''});
    const res = await this.subjectsService.postSubject(value);
    this.notificationService.showSucessMessage('Exito!', 'La materia ha sido creada exitosamente');
    return res;
  }

  resetForm() {
    this.hasError = false;
    this.subjectForm.reset({
      name: '',
      description: ''
    });
    this.subjectId = 0;
  }

  setCreateMode() {
    this.resetForm();
  }

  setEditMode(subjectId: number) {
    if (subjectId === undefined || subjectId === 0) {
      this.hasError = true;
    }
    this.resetForm();
    this.subjectId = subjectId;
    this.getSubjectData().catch(err => {
      this.notificationService.showError('Error!', err);
      this.hasError = true;
      this.stopLoading();
    });
  }

  private async getSubjectData() {
    this.startLoading();
    const subject: SubjectResponseTutorDetail = await this.subjectsService.getSubject(this.subjectId);
    this.subjectForm.patchValue(subject);
    this.stopLoading();
  }

  private startLoading() {
    this.isLoading = true;
    this.spinnerServie.show('subjectFormSpinner');
  }

  private stopLoading() {
    this.isLoading = false;
    this.spinnerServie.hide('subjectFormSpinner');
  }
}
