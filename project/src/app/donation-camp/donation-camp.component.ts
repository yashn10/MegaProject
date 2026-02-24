import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

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


  constructor(private formbuilder: FormBuilder) {
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

  }


  ngOnInit(): void {

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