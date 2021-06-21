import { TestBed } from '@angular/core/testing';

import { ModifyProfessionalProfileApiService } from './modify-professional-profile-api.service';

describe('ModifyProfessionalProfileApiService', () => {
  let service: ModifyProfessionalProfileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyProfessionalProfileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
