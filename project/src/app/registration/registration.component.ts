import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {


  @ViewChild('userForm')
  userForm!: NgForm;
  contactForm: FormGroup;


  constructor(private formbuilder: FormBuilder, private authService: AuthService, private router: Router) {

    this.contactForm = this.formbuilder.group({
      fullname: [''],
      username: [''],
      age: [''],
      bloodgroup: [''],
      email: [''],
      phone: [''],
      password: [''],
      gender: ['']
    })

  }


  addUser(data: any) {
    this.authService.register(data).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You have been registered successfully!',
        }).then(() => {
          this.router.navigate(['/login']);
        });
      }, error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'An error occurred during registration. Please try again.',
        });
      }
    });
  }


  clear() {
    this.userForm.reset();
  }

}