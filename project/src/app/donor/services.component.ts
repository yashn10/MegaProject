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
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'User login required to register for blood donation'
      });
      return;
    }
    this.donorService.createDonor(data).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your data has been saved',
          showConfirmButton: false,
          timer: 2000
        });
        this.userForm.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Error from server side'
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
