import { TestBed } from '@angular/core/testing';

import { ModifyPersonalInformationPostulantApiService } from './modify-personal-information-postulant-api.service';

describe('ModifyPersonalInformationPostulantApiService', () => {
  let service: ModifyPersonalInformationPostulantApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyPersonalInformationPostulantApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
