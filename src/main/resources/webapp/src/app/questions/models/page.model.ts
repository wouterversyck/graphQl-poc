import { Question } from './question.model';

export class Page {
  content: Question[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  empty: boolean;
  totalPages: number;
  numberOfElements: number;
}
