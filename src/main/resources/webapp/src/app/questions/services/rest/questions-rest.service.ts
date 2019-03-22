import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../../../core/models/page.model';
import { Question } from '../../models/question.model';

@Injectable()
export class QuestionsRestService {
  static QUESTIONS_ENDPOINT = '/question';
  constructor(private httpClient: HttpClient) { }

  getQuestions(page: number, nrOfResults: number): Observable<Page<Question>> {
    return this.httpClient.get<Page<Question>>(`${QuestionsRestService.QUESTIONS_ENDPOINT}/${page}/${nrOfResults}`);
  }

  deleteQuestion(id: number) {
    return this.httpClient.delete(`${QuestionsRestService.QUESTIONS_ENDPOINT}/${id}`);
  }
}
