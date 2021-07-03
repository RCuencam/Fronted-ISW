import { TestBed } from '@angular/core/testing';

import { ProfilepostulantService } from './profilepostulant.service';

describe('ProfilepostulantService', () => {
  let service: ProfilepostulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilepostulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
