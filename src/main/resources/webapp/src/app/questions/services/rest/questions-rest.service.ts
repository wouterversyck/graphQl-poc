import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsRestService {
  static QUESTIONS_ENDPOINT = '/question';
  constructor(private httpClient: HttpClient) { }

  getQuestions(page: number, nrOfResults: number): Observable<any> {
    return this.httpClient.get(`${QuestionsRestService.QUESTIONS_ENDPOINT}/${page}/${nrOfResults}`)
  }
}
