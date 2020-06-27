import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './authentication.service';

import { UserRegister } from '../_interfaces/user-register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isUserAuthenticated = new BehaviorSubject<boolean>(false);
  isUserRegistered = new BehaviorSubject<boolean>(false);
  hasUserLoggedOut = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  registerUser(data: UserRegister): boolean {
    let isValid = false;
    this.authenticationService.registerUserWithProvidedData(data).subscribe((response) => {
      isValid = true;
    }, (error => {
      window.alert('Email already exists');
      console.log(error);
      isValid = false;
    }));
    return isValid;
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
