import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BackendService } from '../appservice/backend.service';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-donation-camp',
  templateUrl: './donation-camp.component.html',
  styleUrls: ['./donation-camp.component.scss']
})
export class DonationCampComponent implements OnInit {


  @ViewChild('userForm')
  userForm!: NgForm;
  campForm: FormGroup;
  searchtext: any;
  campList: any = [];
  isclicked = 'yes';
  ispass = '';


  constructor(private formbuilder: FormBuilder, private backend: BackendService, private http: HttpClient) {
    this.campForm = this.formbuilder.group({
      campowner: [''],
      email: [''],
      phone: [''],
      password: [''],
      city: [''],
      state: ['']
    })

  }


  addcamp(data: any) {
    this.http.get<any>('https://megaproject-9885.onrender.com/login').subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.userForm.value.email && a.password === this.userForm.value.password
      })
      if (user) {
        this.backend.addcampData(data).subscribe(
          (campdata) => {
            console.log(campdata, "campdata");
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your camp data has been saved',
              showConfirmButton: false,
              timer: 2500
            })
          }
        )
        this.clear();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'User login required to register for camp'
        })
        this.clear();
        console.log("Login required");
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


  ngOnInit(): void {
    this.backend.getcampData().subscribe(
      (campdata) => {
        this.campList = campdata;
      }
    )
  }


  register() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure to register in this camp for further activities. After clicking "yes" all your important information will be transferred with the camp owner.',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, register!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Successfull!',
          'Your registration has been successfull. You can visit to the camp anytime between active hours or our camp administration will contact you soon.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your registration is cancelled',
          'error'
        )
      }
    })

  }


  camps() {
    this.isclicked = 'no';
  }


  clear() {
    this.userForm.reset();
  }


}