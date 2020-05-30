import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFeedbackManagementComponent } from './team-feedback-management.component';

describe('TeamFeedbackManagementComponent', () => {
  let component: TeamFeedbackManagementComponent;
  let fixture: ComponentFixture<TeamFeedbackManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFeedbackManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFeedbackManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
