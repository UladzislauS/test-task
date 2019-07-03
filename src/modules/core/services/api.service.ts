import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Users } from '../../../interfaces';
import { UserApi } from '../interfaces/user-api';
import { UsersApi } from '../interfaces/users-api';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  fetchUsers(page): Observable<Users> {
    return this.http.get('https://reqres.in/api/users?page=' + page)
      .pipe(
        map((response: UsersApi) => {
          return {
            users: response.data,
            page: response.page,
            per_page: response.per_page,
            total: response.total,
            total_pages: response.total_pages
          };
        })
      );
  }

  fetchUserById(id: number): Observable<User> {
    return this.http.get(`https://reqres.in/api/users/${id}`)
      .pipe(
        map((response: UserApi) => response.data)
      );
  }

}
