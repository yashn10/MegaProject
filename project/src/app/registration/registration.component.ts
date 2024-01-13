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


  constructor(private formbuilder: FormBuilder, private backendService: BackendService, private router: Router, private http: HttpClient) {

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
    this.http.get<any>('https://megaproject-9885.onrender.com/user').subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.userForm.value.email && a.password === this.userForm.value.password
      })
      if (user) {
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'User already registered with same email or password!',
        })
      } else {
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
          }, (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: 'User registration failed due to invalid email or password'
            })
            console.log(error, "error");
          }
        )
      }
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'error from server side occurs'
      })
      this.clear();
      console.log(error, "error");
    }
    )

  }


  clear() {
    this.userForm.reset();
  }

}