import { TestBed } from '@angular/core/testing';

import { NavigationDataChangeService } from './navigation-data-change.service';

describe('NavigationDataChangeService', () => {
  let service: NavigationDataChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationDataChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
