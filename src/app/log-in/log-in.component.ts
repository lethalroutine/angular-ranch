import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user: User = {email: null, password: null};
  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const user = form.value as User;
    this.logIn(user);
  }

  private logIn(data: User): void {
    this.accountService.logInUser(data);
  }
}

interface User {
  email: string;
  password: string;
}
