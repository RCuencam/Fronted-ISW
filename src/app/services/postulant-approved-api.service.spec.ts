import { TestBed } from '@angular/core/testing';

import { PostulantApprovedApiService } from './postulant-approved-api.service';

describe('PostulantApprovedApiService', () => {
  let service: PostulantApprovedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantApprovedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
