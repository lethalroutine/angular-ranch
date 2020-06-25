import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user: User = {email: null, password: null};
  submitted = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const user = form.value as User;
    this.submitted = true;
    console.log(`submitted ${user.email}`);
    form.reset();
    this.router.navigate(['map']);
  }
}

interface User {
  email: string;
  password: string;
}
