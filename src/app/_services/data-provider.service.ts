import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AccountService} from './account.service';
import {Observable} from 'rxjs';

const baseUrl = 'https://ranch-test.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(
    private accountService: AccountService,
    private httpService: HttpClient
  ) {
  }

  fetchDataFromServer(id: number): Observable<object> {
    const jwt = this.accountService.jwtToken;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${jwt}`
      })
    };

    return this.httpService.get(baseUrl + 'polygons/' + id, httpOptions);
  }
}
