import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChartComponent } from './ng-chart.component';

describe('NgChartComponent', () => {
  let component: NgChartComponent;
  let fixture: ComponentFixture<NgChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
