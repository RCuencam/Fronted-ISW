import { TestBed } from '@angular/core/testing';

import { PostulantjobsService } from './postulantjobs.service';

describe('PostulantjobsService', () => {
  let service: PostulantjobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantjobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
