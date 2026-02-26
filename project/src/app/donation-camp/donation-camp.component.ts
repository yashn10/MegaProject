import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CampService } from '../services/camp.service';
import { AuthService } from '../services/auth.service';

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
  isAdmin = false;


  constructor(
    private formbuilder: FormBuilder,
    private campService: CampService,
    private authService: AuthService
  ) {
    this.campForm = this.formbuilder.group({
      campowner: [''],
      email: [''],
      phone: [''],
      password: [''],
      city: [''],
      state: ['']
    });
  }


  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.loadCamps();
  }


  loadCamps() {
    this.campService.getAllCamps().subscribe({
      next: (res: any) => {
        this.campList = res.data || res;
      },
      error: (err) => {
        console.log('Error loading camps:', err);
      }
    });
  }


  addcamp(data: any) {
    this.campService.createCamp(data).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Camp Registered Successfully',
          showConfirmButton: true,
        });
        this.campList.push(res);
        this.loadCamps();
        if (this.userForm) {
          this.userForm.reset();
        }
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Register Camp',
          text: err.error?.message || 'Something went wrong!',
          showConfirmButton: true,
        });
        console.log(err);
      }
    });
  }


  register() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure to register in this camp for further activities. After clicking "yes" all your important information will be transferred with the camp owner.',
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
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your registration is cancelled',
          'error'
        );
      }
    });
  }


  camps() {
    this.isclicked = 'no';
  }

  goback() {
    this.isclicked = 'yes';
  }


  clear() {
    this.userForm.reset();
  }

}