import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../_services/authorization.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {name: 'Info', link: 'info'},
    {name: 'Map', link: 'map'},
  ];
  private isUserRegistered = false;
  private isUserLogged = false;
  private hasUserLoggedOut = false;


  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.subscribeForUserRegister();

    this.subscribeForUserLogIn();

    this.subscribeForUserLogOut();
  }

  private subscribeForUserRegister() {
    this.authorizationService.isUserRegistered.subscribe(isRegistered => {
      this.isUserRegistered = isRegistered;
    });
  }

  private subscribeForUserLogIn() {
    this.authorizationService.isUserAuthenticated.subscribe(isLogged => {
      this.isUserLogged = isLogged;
    });
  }

  private subscribeForUserLogOut() {
    this.authorizationService.hasUserLoggedOut.subscribe(hasLoggedOut => {
      this.hasUserLoggedOut = hasLoggedOut;
    });
  }

  private onLogOut() {
    this.authorizationService.logOutUser();
  }
}

interface MenuItem {
  name: string;
  link: string;
}
