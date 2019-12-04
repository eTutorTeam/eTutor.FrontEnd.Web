import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsValidationComponent } from './tutors-validation.component';

describe('TutorsValidationComponent', () => {
  let component: TutorsValidationComponent;
  let fixture: ComponentFixture<TutorsValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorsValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
