import { TestBed } from '@angular/core/testing';

import { PwaService } from './pwa.service';
import { EMPTY } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

class SwUpdateMock {
  available = EMPTY;
  constructor() { }
}

describe('PwaService', () => {
  const swUpdate = new SwUpdateMock();
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: SwUpdate, useValue: swUpdate }
    ]
  }));

  it('should be created', () => {
    const service: PwaService = TestBed.get(PwaService);
    expect(service).toBeTruthy();
  });
});
