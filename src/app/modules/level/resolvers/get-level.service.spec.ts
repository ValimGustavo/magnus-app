import { TestBed } from '@angular/core/testing';

import { GetLevelService } from './get-level.service';

describe('GetLevelService', () => {
  let service: GetLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
