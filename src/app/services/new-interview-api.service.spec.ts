import { TestBed } from '@angular/core/testing';

import { NewInterviewApiService } from './new-interview-api.service';

describe('NewInterviewApiService', () => {
  let service: NewInterviewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewInterviewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
