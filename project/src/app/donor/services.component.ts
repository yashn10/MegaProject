import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DonorService } from '../services/donor.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  @ViewChild('userForm')
  userForm!: NgForm;
  donorForm: FormGroup;
  diseaseyes = '';


  addDonor(data: any) {
    if (!this.authService.isLoggedIn()) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'Please login to register as a blood donor.',
        confirmButtonColor: '#c62828'
      });
      return;
    }
    this.donorService.createDonor(data).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Donor Registered!',
          text: 'You have been successfully registered as a blood donor. Thank you for your contribution!',
          confirmButtonColor: '#c62828'
        });
        this.userForm.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: err.error?.message || 'An error occurred. Please check your details and try again.',
          confirmButtonColor: '#c62828'
        });
        console.log(err);
      }
    });
  }


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private donorService: DonorService,
    private authService: AuthService
  ) {
    this.donorForm = this.formbuilder.group({
      firstname: [''],
      middlename: [''],
      lastname: [''],
      email: [''],
      phone: [''],
      address: [''],
      DOB: [''],
      bloodgroup: [''],
      city: [''],
      gender: [''],
      anydisease: [''],
      disease: ['']
    });
  }


  yes() {
    this.diseaseyes = 'yes';
  }


  clear() {
    this.userForm.reset();
  }

}
