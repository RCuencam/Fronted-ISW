import { TestBed } from '@angular/core/testing';

import { JobNewApiService } from './job-new-api.service';

describe('JobNewApiService', () => {
  let service: JobNewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobNewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
