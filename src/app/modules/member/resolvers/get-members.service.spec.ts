import { TestBed } from '@angular/core/testing';

import { GetMembersService } from './get-members.service';

describe('GetMembersService', () => {
  let service: GetMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
