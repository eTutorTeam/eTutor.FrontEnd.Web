import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredTutorsComponent } from './unregistered-tutors.component';

describe('UnregisteredTutorsComponent', () => {
  let component: UnregisteredTutorsComponent;
  let fixture: ComponentFixture<UnregisteredTutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisteredTutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
