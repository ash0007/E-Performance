import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeedbackManagementComponent } from './my-feedback-management.component';

describe('MyFeedbackManagementComponent', () => {
  let component: MyFeedbackManagementComponent;
  let fixture: ComponentFixture<MyFeedbackManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFeedbackManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFeedbackManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
