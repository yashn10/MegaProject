import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutcamp',
  templateUrl: './logoutcamp.component.html',
  styleUrls: ['./logoutcamp.component.scss']
})
export class LogoutcampComponent implements OnInit {

  @ViewChild('userForm')
  userForm!: NgForm;
  campForm: FormGroup;
  searchtext: any;
  campList: any = [];
  isclicked = 'yes';
  ispass = '';


  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.campForm = this.formbuilder.group({
      campowner: [''],
      email: [''],
      phone: [''],
      password: [''],
      city: ['']
    })

  }


  addcamp(data: any) {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      confirmButtonText: 'Go for login!',
      footer: 'User login required to register for camp'
    }).then((result) => {
      this.router.navigate(['login']);
    })

  }


  ngOnInit(): void {

  }


  register() {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      confirmButtonText: 'Go for login!',
      footer: 'User login required to register for camp'
    }).then((result) => {
      this.router.navigate(['login']);
    })

  }


  delete(_id: string) {

  }


  camps() {
    this.isclicked = 'no';
  }


  edit(_id: any, i: any) { }


  clear() {
    this.userForm.reset();
  }

}
