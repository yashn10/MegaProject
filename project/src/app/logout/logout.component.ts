import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../appservice/backend.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {


  logoutForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private backend: BackendService) { }

  ngOnInit(): void {
    this.logoutForm = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }


  logout() {
    this.http.get<any>('http://localhost:3000/login').subscribe(res => {
      const user = res.find((a: any) => {
        return a.password === this.logoutForm.value.password
      })
      if (user) {
        this.backend.deleteLogin(user._id).subscribe(
          (response) => {
            console.log(response);
            Swal.fire(
              'Successfull!',
              'You logout successfully!',
              'success'
            )
            console.log("Logout Successfully");
            this.logoutForm.reset();
          }, (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: error
            })
            console.log(error, "error");
          }
        )
        this.router.navigate(['home']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Incorrect Username or Password'
        })
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'Error occurs from server side'
      })
      console.log(error, "error");
    }
    )
  }


}