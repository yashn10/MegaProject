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
      title: 'Logout?',
      text: 'Are you sure you want to sign out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#c62828',
      cancelButtonColor: '#9e9e9e',
      confirmButtonText: 'Yes, Logout',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout().subscribe({
          next: () => {
            this.authService.clearSession();
            Swal.fire({
              icon: 'success',
              title: 'Logged Out',
              text: 'You have been signed out successfully.',
              confirmButtonColor: '#c62828',
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