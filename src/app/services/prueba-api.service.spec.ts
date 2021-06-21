import { TestBed } from '@angular/core/testing';

import { PruebaApiService } from './prueba-api.service';

describe('PruebaApiService', () => {
  let service: PruebaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
