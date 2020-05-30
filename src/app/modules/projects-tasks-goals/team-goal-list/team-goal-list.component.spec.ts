import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGoalListComponent } from './team-goal-list.component';

describe('TeamGoalListComponent', () => {
  let component: TeamGoalListComponent;
  let fixture: ComponentFixture<TeamGoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamGoalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
