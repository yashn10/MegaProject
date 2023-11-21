import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../appservice/backend.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private backend: BackendService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    this.http.get<any>('http://localhost:3000/user').subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        this.loginForm.reset;
        this.backend.addloginData(user).subscribe(
          (response) => {
            console.log(response);
            Swal.fire(
              'Good job!',
              'You login successfully!',
              'success'
            )
          }, (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: 'User login failed'
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
          footer: 'Incorrect username or password'
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