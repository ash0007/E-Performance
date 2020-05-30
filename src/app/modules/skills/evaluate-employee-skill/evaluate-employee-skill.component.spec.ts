import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateEmployeeSkillComponent } from './evaluate-employee-skill.component';

describe('EvaluateEmployeeSkillComponent', () => {
  let component: EvaluateEmployeeSkillComponent;
  let fixture: ComponentFixture<EvaluateEmployeeSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateEmployeeSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateEmployeeSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
