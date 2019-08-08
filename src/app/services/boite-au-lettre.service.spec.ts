import { TestBed } from '@angular/core/testing';

import { BoiteAuLettreService } from './boite-au-lettre.service';

describe('BoiteAuLettreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoiteAuLettreService = TestBed.get(BoiteAuLettreService);
    expect(service).toBeTruthy();
  });
});
