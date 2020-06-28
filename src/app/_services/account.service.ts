import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {BehaviorSubject} from 'rxjs';
import {AuthenticationService} from './authentication.service';

import {UserRegister} from '../_interfaces/user-register';
import {UserLogIn} from '../_interfaces/user-log-in';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isUserAuthenticated = new BehaviorSubject<boolean>(false);
  isUserRegistered = new BehaviorSubject<boolean>(false);
  hasUserLoggedOut = new BehaviorSubject<boolean>(false);
  jwtToken: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  registerUser(data: UserRegister) {
    this.authenticationService.registerUserWithProvidedData(data).subscribe((response) => {
      this.isUserRegistered.next(true);
      window.alert('User successfully registered');
      this.router.navigate(['log-in']);
    }, (error => {
      window.alert('Email already exists');
      console.log(error);
    }));
  }

  logInUser(data: UserLogIn): void {
    this.authenticationService.authenticateUserWithProvidedData(data)
      .subscribe((response: JwtResponse) => {
          this.jwtToken = response.jwt;
          console.log('Retrieved token:', this.jwtToken);
          this.router.navigate(['map']);
          this.isUserAuthenticated.next(true);
        },
        (() => {
          window.alert('Failed to log in');
        })
      );
  }

  logOutUser() {
    this.hasUserLoggedOut.next(true);
    this.isUserAuthenticated.next(false);
    this.isUserRegistered.next(false);
    this.router.navigate(['log-in']);
  }
}

interface JwtResponse {
  jwt: string;
}
