import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGoalListComponent } from './my-goal-list.component';

describe('MyGoalListComponent', () => {
  let component: MyGoalListComponent;
  let fixture: ComponentFixture<MyGoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGoalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
