import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.authService.saveToken(res.data.token);
        this.authService.saveUser(res.data.user);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
          confirmButtonColor: '#c62828'
        }).then(() => {
          this.router.navigate(['/dashboard']);
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error?.message || 'Login Failed',
          text: 'Please check your email and password and try again.',
          confirmButtonColor: '#c62828'
        });
        console.log(err);
      }
    });
  }
}