import { TestBed } from '@angular/core/testing';

import { DevisCommandeService } from './devis-commande.service';

describe('DevisCommandeService', () => {
  let service: DevisCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevisCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
