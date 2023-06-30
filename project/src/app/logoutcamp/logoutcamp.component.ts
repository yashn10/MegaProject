import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BackendService } from '../appservice/backend.service';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
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


  constructor(private formbuilder: FormBuilder, private backend: BackendService, private http: HttpClient, private router: Router) {
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
    this.backend.getcampData().subscribe(
      (campdata) => {
        this.campList = campdata;
      }
    )
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

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.backend.deleteCamp(_id).subscribe(
          (deleteddata) => {
            console.log("deleted data", deleteddata);
          }
        )
        Swal.fire(
          'Deleted!',
          'Your data has been deleted successfully.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your blood donation camp data is safe',
          'error'
        )
      }
    })
  }


  camps() {
    this.isclicked = 'no';
  }


  edit(_id: any, i: any) { }


  clear() {
    this.userForm.reset();
  }

}
