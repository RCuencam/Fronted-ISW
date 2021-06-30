import { TestBed } from '@angular/core/testing';

import { PostulantService } from './postulant.service';

describe('PostulantService', () => {
  let service: PostulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
