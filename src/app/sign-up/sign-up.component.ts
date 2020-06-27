import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: RegistrationUser = {email: null, password: null, retypedPassword: null};
  submitted = false;
  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const user = form.value as RegistrationUser;
    this.submitted = true;
    console.log(`submitted ${user.email}`);
    if (user.password !== user.retypedPassword) {
      return;
    }
    form.reset();
    this.markAsRegistered();
    this.router.navigate(['log-in']);
  }

  private markAsRegistered() {
    this.accountService.registerUser();
  }
}

interface RegistrationUser {
  email: string;
  password: string;
  retypedPassword: string;
}
