import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserRegister } from '../_interfaces/user-register';
import { UserLogIn } from '../_interfaces/user-log-in';

const baseUrl = 'https://ranch-test.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpService: HttpClient) { }

  registerUserWithProvidedData(data: UserRegister): Observable<object> {
    const payload = {user: data}
    return this.httpService.post<object>(baseUrl + 'users', payload);
  }

  authenticateUserWithProvidedData(data: UserLogIn): Observable<object> {
    const payload = {auth: data};
    return this.httpService.post<object>(baseUrl + 'user_token', payload);
  }
}
