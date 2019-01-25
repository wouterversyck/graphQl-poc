export class Page<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  empty: boolean;
  totalPages: number;
  numberOfElements: number;
}
