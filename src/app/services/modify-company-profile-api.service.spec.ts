import { TestBed } from '@angular/core/testing';

import { ModifyCompanyProfileApiService } from './modify-company-profile-api.service';

describe('ModifyCompanyProfileApiService', () => {
  let service: ModifyCompanyProfileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyCompanyProfileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
