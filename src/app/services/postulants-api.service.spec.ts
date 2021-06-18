import { TestBed } from '@angular/core/testing';

import { PostulantsApiService } from './postulants-api.service';

describe('PostulantsApiService', () => {
  let service: PostulantsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
