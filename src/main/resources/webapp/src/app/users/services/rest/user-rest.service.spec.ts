import { TestBed } from '@angular/core/testing';

import { UserRestService } from './user-rest.service';

describe('UserRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRestService = TestBed.get(UserRestService);
    expect(service).toBeTruthy();
  });
});
