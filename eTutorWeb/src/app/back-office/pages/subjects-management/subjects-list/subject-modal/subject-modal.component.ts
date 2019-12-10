import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styleUrls: ['./subject-modal.component.scss']
})
export class SubjectModalComponent implements OnInit {

  isVisible = false;
  modalTitle = 'Crear Materia';
  isEditMode = false;

  constructor() {}

  ngOnInit(): void {
  }

  get buttonText() {
    return this.isEditMode ? 'Actualizar Materia' : 'Crear Materia';
  }

  openCreateModal() {
    this.modalTitle = 'Crear Materia';
    this.isVisible = true;
    this.isEditMode = false;
  }

  openEditModal(subjectId: number) {
    this.modalTitle = 'Modificar Materia';
    this.isVisible = true;
    this.isEditMode = true;
  }

  closeModal() {
    this.isVisible = false;
  }

}
