import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BackendService } from '../appservice/backend.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {


  @ViewChild('userForm')
  userForm!: NgForm;
  contactForm: FormGroup;


  addUser(data: any) {
    this.backendService.addregisterData(data).subscribe(
      (userdata) => {
        console.log("userdata", userdata);
        Swal.fire({
          title: 'Successfull',
          text: "Your registration have been successfull!",
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'proceed to login!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['login']);
          }
        })
      }
    ), (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    this.clear();
  }


  constructor(private formbuilder: FormBuilder, private backendService: BackendService, private router: Router) {

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


  clear() {
    this.userForm.reset();
  }


}