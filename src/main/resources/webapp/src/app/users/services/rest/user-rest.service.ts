import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { Page } from '../../../core/models/page.model';
import { tap } from 'rxjs/operators';
import { CollectionChangeEvent } from '../../../core/models/collection-change-event';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  static USERS_ENDPOINT = '/user';
  constructor(private httpClient: HttpClient) { }
  collectionChanged = new Subject<CollectionChangeEvent<User>>();

  getUsers(page: number, nrOfResults: number): Observable<Page<User>> {
    return this.httpClient.get<Page<User>>(`${UserRestService.USERS_ENDPOINT}/${page}/${nrOfResults}`);
  }

  deleteUsers(id: number) {
    return this.httpClient.delete(`${UserRestService.USERS_ENDPOINT}/${id}`);
  }

  searchUser(keyWord: string) {
    return this.httpClient.get(`${UserRestService.USERS_ENDPOINT}/search/${keyWord}`);
  }

  userNameExists(userName: string) {
    return this.httpClient.get(`${UserRestService.USERS_ENDPOINT}/exists/${userName}`);
  }

  addUser(user: User) {
    return this.httpClient.post(`${UserRestService.USERS_ENDPOINT}`, user)
      .pipe(
        tap(response => this.collectionChanged.next({
          action: 'delete',
          object: user
        }))
      );
  }
}
