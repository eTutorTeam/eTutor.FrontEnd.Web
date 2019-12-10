import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SubjectFormComponent} from './subject-form/subject-form.component';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styleUrls: ['./subject-modal.component.scss']
})
export class SubjectModalComponent implements OnInit {

  isVisible = false;
  isEditMode = false;
  @ViewChild('subjectForm', {static: true}) subjectFormComponent: SubjectFormComponent;
  @Output() submitted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  get modalTitle() {
    return !this.isEditMode ? 'Crear Materia' : 'Actualizar Materia';
  }

  get buttonText() {
    return this.isEditMode ? 'Actualizar Materia' : 'Crear Materia';
  }

  get isValid() {
    return this.subjectFormComponent.isValid;
  }

  openCreateModal() {
    this.subjectFormComponent.setCreateMode();
    this.isVisible = true;
    this.isEditMode = false;
  }

  openEditModal(subjectId: number) {
    this.subjectFormComponent.setEditMode(subjectId);
    this.isVisible = true;
    this.isEditMode = true;
  }

  closeModal() {
    this.subjectFormComponent.resetForm();
    this.isVisible = false;
  }

  submit() {
    this.subjectFormComponent.submitForm().then(res => {
      this.submitted.emit();
    });
  }

}
