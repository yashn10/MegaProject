import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nav = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.updateNav();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateNav();
      }
    });
  }

  updateNav() {
    this.nav = this.authService.isLoggedIn() ? 'yes' : '';
  }

  performLogout() {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'No, stay logged in'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout().subscribe({
          next: () => {
            this.authService.clearSession();
            Swal.fire({
              icon: 'success',
              title: 'Logged Out Successfully',
              showConfirmButton: true,
            }).then(() => {
              this.router.navigate(['/home']);
            });
          },
          error: () => {
            // Clear session even if API call fails
            this.authService.clearSession();
            this.router.navigate(['/home']);
          }
        });
      }
    });
  }

}