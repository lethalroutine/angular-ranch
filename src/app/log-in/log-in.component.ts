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
  submitted = false;
  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const user = form.value as User;
    this.submitted = true;
    console.log(`submitted ${user.email}`);
    form.reset();
    this.markAsLoggedIn();
    this.router.navigate(['map']);
  }

  private markAsLoggedIn() {
    this.accountService.logInUser();
  }
}

interface User {
  email: string;
  password: string;
}
