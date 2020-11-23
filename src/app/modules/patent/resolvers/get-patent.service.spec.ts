import { TestBed } from '@angular/core/testing';

import { GetPatentService } from './get-patent.service';

describe('GetPatentService', () => {
  let service: GetPatentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPatentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
