import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User, Users } from '../../../interfaces';

@Injectable()
export class ApiServiceStub {

  constructor() { }

  fetchUsers(page): Observable<Users> {
    return null;
  }

  fetchUserById(id: number): Observable<User> {
    return null;
  }

}
