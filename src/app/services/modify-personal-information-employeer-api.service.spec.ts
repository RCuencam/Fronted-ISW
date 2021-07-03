import { TestBed } from '@angular/core/testing';

import { ModifyPersonalInformationEmployeerApiService } from './modify-personal-information-employeer-api.service';

describe('ModifyPersonalInformationEmployeerApiService', () => {
  let service: ModifyPersonalInformationEmployeerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyPersonalInformationEmployeerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
