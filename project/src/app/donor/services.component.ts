import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BackendService } from '../appservice/backend.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


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
    this.http.get<any>('http://localhost:3000/login').subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.userForm.value.email
      })
      if (user) {
        this.backendService.adddonorData(data).subscribe(
          (userdata) => {
            console.log(userdata);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your data has been saved',
              showConfirmButton: false,
              timer: 2000
            })
          }
        )
        this.userForm.reset;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'User login required to register for blood donation'
        })
        console.log("Login required");
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'error from server side'
      })
      console.log(error, "error");
    }
    )
  }


  constructor(private formbuilder: FormBuilder, private backendService: BackendService, private http: HttpClient, private router: Router) {

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
    })

  }


  yes() {
    this.diseaseyes = 'yes';
  }


  clear() {
    this.userForm.reset();
  }

}
