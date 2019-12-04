import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeMenuItemsComponent } from './back-office-menu-items.component';

describe('BackOfficeMenuItemsComponent', () => {
  let component: BackOfficeMenuItemsComponent;
  let fixture: ComponentFixture<BackOfficeMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackOfficeMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
