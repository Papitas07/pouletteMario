import { TestBed } from '@angular/core/testing';

import { CurseurService } from './curseur.service';

describe('CurseurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurseurService = TestBed.get(CurseurService);
    expect(service).toBeTruthy();
  });
});
