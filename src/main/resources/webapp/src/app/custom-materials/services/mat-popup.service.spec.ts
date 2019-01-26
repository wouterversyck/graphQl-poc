import { TestBed } from '@angular/core/testing';

import { MatPopupService } from './mat-popup.service';

describe('MatPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatPopupService = TestBed.get(MatPopupService);
    expect(service).toBeTruthy();
  });
});
