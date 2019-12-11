import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsListComponent } from './tutors-list.component';

describe('TutorsListComponent', () => {
  let component: TutorsListComponent;
  let fixture: ComponentFixture<TutorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
