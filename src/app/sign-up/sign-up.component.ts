import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../_services/account.service';
import { UserRegister } from '../_interfaces/user-register';

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
    const passwordsMatch = user.password !== user.retypedPassword
    if (!passwordsMatch) {
      window.alert('passwords are different');
      return;
    }
    const isSuccessfullyRegistered  = this.handleUserRegister({email: user.email, password: user.password});
    if (isSuccessfullyRegistered) {
      this.handleSuccessfulUserRegistration(form);
    }
  }

  private handleSuccessfulUserRegistration(form: NgForm) {
    this.accountService.isUserRegistered.next(true);
    this.router.navigate(['log-in']);
    form.reset();
    window.alert('User successfully registered');
  }

  private handleUserRegister(data: UserRegister): boolean {
    return this.accountService.registerUser(data);
  }
}

interface RegistrationUser {
  email: string;
  password: string;
  retypedPassword: string;
}
