import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTaskListComponent } from './team-task-list.component';

describe('TeamTaskListComponent', () => {
  let component: TeamTaskListComponent;
  let fixture: ComponentFixture<TeamTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
