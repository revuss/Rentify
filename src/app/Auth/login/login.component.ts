import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  LoginForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(
    private toast: NgToastService,
    private userService: UserServiceService,
    private router: Router
  ) {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onLogin() {
    this.isFormSubmitted = true;
    if (this.LoginForm.valid) {
      this.userService.login(this.LoginForm.value).subscribe({
        next: (response) => {
          console.log('logged in successful', response);
          this.toast.success({
            detail: 'Logged In',
            summary: 'Redirecting to home',
            position: 'topRight',
          });
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        error: (error) => {
          console.error('sign-up failed', error);
          this.toast.error({
            detail: 'Registration Failed',
            summary: error.error.message || 'Something went wrong!',
            position: 'topRight',
          });
        },
      });
    }
  }
}
