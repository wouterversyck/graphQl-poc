import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Page } from '../../../core/models/page.model';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  static USERS_ENDPOINT = '/user';
  constructor(private httpClient: HttpClient) { }

  getUsers(page: number, nrOfResults: number): Observable<Page<User>> {
    return this.httpClient.get<Page<User>>(`${UserRestService.USERS_ENDPOINT}/${page}/${nrOfResults}`);
  }

  deleteUsers(id: number) {
    return this.httpClient.delete(`${UserRestService.USERS_ENDPOINT}/${id}`);
  }

  addUser(user: User) {
    return this.httpClient.post(`${UserRestService.USERS_ENDPOINT}`, user);
  }
}
