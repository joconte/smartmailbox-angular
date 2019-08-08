import { TestBed } from '@angular/core/testing';

import { CourrierService } from './courrier.service';

describe('CourrierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourrierService = TestBed.get(CourrierService);
    expect(service).toBeTruthy();
  });
});
