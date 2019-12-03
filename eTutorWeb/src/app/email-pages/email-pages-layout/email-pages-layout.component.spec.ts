import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPagesLayoutComponent } from './email-pages-layout.component';

describe('EmailPagesLayoutComponent', () => {
  let component: EmailPagesLayoutComponent;
  let fixture: ComponentFixture<EmailPagesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPagesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
