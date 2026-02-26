import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminForm!: FormGroup;

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
    this.adminForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    this.authService.login(this.adminForm.value).subscribe({
      next: (res: any) => {
        if (res.data.user.role !== 'admin') {
          Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: 'This account does not have admin privileges.',
            showConfirmButton: true,
          });
          return;
        }
        this.authService.saveToken(res.data.token);
        this.authService.saveUser(res.data.user);
        Swal.fire({
          icon: 'success',
          title: 'Admin Login Successful',
          showConfirmButton: true,
        }).then(() => {
          this.router.navigate(['/dashboard']);
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || 'Login Failed',
          text: 'Please check your credentials and try again.',
          showConfirmButton: true,
        });
        console.log(err);
      }
    });
  }
}
