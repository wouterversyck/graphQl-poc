import { TestBed } from '@angular/core/testing';

import { UserRestService } from './user-rest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: UserRestService = TestBed.get(UserRestService);
    expect(service).toBeTruthy();
  });
});
