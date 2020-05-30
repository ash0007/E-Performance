import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadContentComponent } from './subhead-content.component';

describe('SubheadContentComponent', () => {
  let component: SubheadContentComponent;
  let fixture: ComponentFixture<SubheadContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheadContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
