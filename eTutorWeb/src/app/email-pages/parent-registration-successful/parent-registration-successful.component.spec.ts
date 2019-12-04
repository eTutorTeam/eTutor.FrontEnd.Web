import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRegistrationSuccessfulComponent } from './parent-registration-successful.component';

describe('ParentRegistrationSuccessfullComponent', () => {
  let component: ParentRegistrationSuccessfulComponent;
  let fixture: ComponentFixture<ParentRegistrationSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentRegistrationSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRegistrationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
