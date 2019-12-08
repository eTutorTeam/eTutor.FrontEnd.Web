import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildrenManagerComponent } from './parent-children-manager.component';

describe('ParentChildrenManagerComponent', () => {
  let component: ParentChildrenManagerComponent;
  let fixture: ComponentFixture<ParentChildrenManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildrenManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildrenManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
