import { TestBed } from '@angular/core/testing';

import { QuestionsRestService } from './questions-rest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuestionsRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      QuestionsRestService
    ]
  }));

  it('should be created', () => {
    const service: QuestionsRestService = TestBed.get(QuestionsRestService);
    expect(service).toBeTruthy();
  });
});
