import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isUserAuthenticated = new BehaviorSubject<boolean>(false);
  isUserRegistered = new BehaviorSubject<boolean>(false);
  hasUserLoggedOut = new BehaviorSubject<boolean>(false);
  constructor(private router: Router) { }

  registerUser() {
    this.isUserRegistered.next(true);
  }

  logInUser() {
    this.isUserAuthenticated.next(true);
  }

  logOutUser() {
    this.hasUserLoggedOut.next(true);
    this.isUserAuthenticated.next(false);
    this.isUserRegistered.next(false);
    this.router.navigate(['log-in']);
  }
}
