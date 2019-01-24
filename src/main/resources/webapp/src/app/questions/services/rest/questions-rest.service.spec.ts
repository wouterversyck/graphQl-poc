import { TestBed } from '@angular/core/testing';

import { QuestionsRestService } from './questions-rest.service';

describe('QuestionsRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsRestService = TestBed.get(QuestionsRestService);
    expect(service).toBeTruthy();
  });
});
