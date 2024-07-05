import { TestBed } from '@angular/core/testing';

import { PmesServiceService } from './pmes.service.service';

describe('PmesServiceService', () => {
  let service: PmesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
