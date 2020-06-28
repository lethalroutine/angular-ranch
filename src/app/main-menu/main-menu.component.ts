import { Component, OnInit } from '@angular/core';

import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  isUserRegistered = false;
  isUserLogged = false;
  hasUserLoggedOut = false;


  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.subscribeForUserRegister();

    this.subscribeForUserLogIn();

    this.subscribeForUserLogOut();
  }

  private subscribeForUserRegister() {
    this.accountService.isUserRegistered.subscribe(isRegistered => {
      this.isUserRegistered = isRegistered;
    });
  }

  private subscribeForUserLogIn() {
    this.accountService.isUserAuthenticated.subscribe(isLogged => {
      this.isUserLogged = isLogged;
    });
  }

  private subscribeForUserLogOut() {
    this.accountService.hasUserLoggedOut.subscribe(hasLoggedOut => {
      this.hasUserLoggedOut = hasLoggedOut;
    });
  }

  onLogOut() {
    this.accountService.logOutUser();
  }
}
