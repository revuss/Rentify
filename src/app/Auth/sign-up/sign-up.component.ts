import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { confirmPasswordValidator } from './confirm-password.validator';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { UserServiceService } from '../Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
    HttpClientModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(
    private toast: NgToastService,
    private userService: UserServiceService,
    private router: Router
  ) {
    this.userForm = new FormGroup(
      {
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        phonenumber: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      { validators: confirmPasswordValidator }
    );
  }

  onSubmit(): void {
    this.isFormSubmitted = true;
    this.userForm.markAsTouched();
    if (this.userForm.valid) {
      this.userService.signUp(this.userForm.value).subscribe({
        next: (response) => {
          console.log('Sign-up successful', response);
          this.toast.success({
            detail: 'Registered',
            summary: 'Redirecting to Login Page',
            position: 'topRight',
          });
          setTimeout(() => {
            this.router.navigate(['/login']); // Navigate to the login page after 2 seconds
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
